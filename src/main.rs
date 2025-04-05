#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")] // hide console window on Windows in release
#![allow(rustdoc::missing_crate_level_docs)] // it's an example

use eframe::egui;
use egui_plot::{Line, Plot, PlotPoints};
use pmcore::prelude::Data;

fn main() -> eframe::Result {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default().with_inner_size([800.0, 600.0]), // Updated size
        ..Default::default()
    };
    eframe::run_native(
        "Tacrolimus Dosing Calculator",
        options,
        Box::new(|cc| {
            // This gives us image support:
            egui_extras::install_image_loaders(&cc.egui_ctx);

            Ok(Box::<MyApp>::default())
        }),
    )
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Sex {
    Male,
    Female,
}

#[derive(Debug, Clone)]
struct TimeConcentration {
    time: Option<f64>,          // Store as f64
    concentration: Option<f64>, // Store as f64
}

struct MyApp {
    age: Option<f64>,        // Store as f64
    weight: Option<f64>,     // Store as f64
    hematocrit: Option<f64>, // Store as f64
    dose: Option<f64>,       // Store as f64
    sex: Sex,
    time_concentration_table: Vec<TimeConcentration>,
    addl: Option<usize>,
    ii: Option<f64>,
    data: Option<Data>,
}

impl Default for MyApp {
    fn default() -> Self {
        Self {
            age: None,
            weight: None,
            hematocrit: None,
            dose: None,
            sex: Sex::Male,
            time_concentration_table: vec![TimeConcentration {
                time: None,
                concentration: None,
            }],
            addl: None,
            ii: None,
            data: None,
        }
    }
}

impl eframe::App for MyApp {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        let mut style = (*ctx.style()).clone();
        style.text_styles = [
            (egui::TextStyle::Heading, egui::FontId::proportional(24.0)),
            (egui::TextStyle::Body, egui::FontId::proportional(16.0)),
            (egui::TextStyle::Button, egui::FontId::proportional(16.0)),
            (egui::TextStyle::Small, egui::FontId::proportional(16.0)),
        ]
        .into();
        ctx.set_style(style);

        egui::SidePanel::left("sidebar").show(ctx, |ui| {
            ui.heading("Input Information");
            ui.vertical(|ui| {
                ui.label("Sex:");
                ui.horizontal(|ui| {
                    ui.selectable_value(&mut self.sex, Sex::Male, "Male");
                    ui.selectable_value(&mut self.sex, Sex::Female, "Female");
                });
            });
            ui.vertical(|ui| {
                ui.label("Age:");
                ui.add(
                    egui::DragValue::new(self.age.get_or_insert(0.0))
                        .speed(0.1)
                        .range(0.0..=120.0),
                );
            });
            ui.vertical(|ui| {
                ui.label("Weight (kg):");
                ui.add(
                    egui::DragValue::new(self.weight.get_or_insert(0.0))
                        .speed(0.1)
                        .range(0.0..=200.0),
                );
            });
            ui.vertical(|ui| {
                ui.label("Hematocrit:");
                ui.add(
                    egui::DragValue::new(self.hematocrit.get_or_insert(0.0))
                        .speed(0.01)
                        .range(0.0..=1.0),
                );
            });
            ui.vertical(|ui| {
                ui.label("Dose (mg):");
                ui.add(
                    egui::DragValue::new(self.dose.get_or_insert(0.0))
                        .speed(0.1)
                        .range(0.0..=1000.0),
                );
            });
            ui.vertical(|ui| {
                ui.label("Additional Doses (addl):");
                ui.add(
                    egui::DragValue::new(self.addl.get_or_insert(0))
                        .speed(1.0)
                        .range(0.0..=100.0),
                );
            });
            ui.vertical(|ui| {
                ui.label("Dosing Interval (ii) (hours):");
                ui.add(
                    egui::DragValue::new(self.ii.get_or_insert(0.0))
                        .speed(0.1)
                        .range(0.0..=24.0),
                );
            });
        });

        egui::CentralPanel::default().show(ctx, |ui| {
            ui.heading("Data");

            let mut indices_to_remove = Vec::new();

            ui.horizontal(|ui| {
                for (i, row) in self.time_concentration_table.iter_mut().enumerate() {
                    ui.horizontal(|ui| {
                        ui.add(
                            egui::DragValue::new(row.time.get_or_insert(0.0))
                                .speed(0.1)
                                .range(0.0..=24.0),
                        );
                        ui.add(
                            egui::DragValue::new(row.concentration.get_or_insert(0.0))
                                .speed(0.1)
                                .range(0.0..=100.0),
                        );
                        if ui.button("Remove").clicked() {
                            indices_to_remove.push(i);
                        }
                    });
                }

                // Remove rows marked for deletion
                self.time_concentration_table = self
                    .time_concentration_table
                    .clone()
                    .into_iter()
                    .enumerate()
                    .filter(|(i, _)| !indices_to_remove.contains(i))
                    .map(|(_, row)| row)
                    .collect();

                if ui.button("Add Row").clicked() {
                    self.time_concentration_table.push(TimeConcentration {
                        time: None,
                        concentration: None,
                    });
                }
                //////////////////////
                let points: PlotPoints = self
                    .time_concentration_table
                    .iter()
                    .filter_map(|row| {
                        if let (Some(time), Some(concentration)) = (row.time, row.concentration) {
                            Some([time, concentration])
                        } else {
                            None
                        }
                    })
                    .collect();
                let line = Line::new(points);
                Plot::new("concentration_time_plot")
                    .y_axis_label("Concentration")
                    .x_axis_label("Time")
                    .allow_drag(false)
                    .allow_zoom(false)
                    .allow_scroll(false)
                    .view_aspect(2.0)
                    .show(ui, |plot_ui| {
                        plot_ui.line(line);
                    });
            });

            // Plot the data
        });
    }
}
