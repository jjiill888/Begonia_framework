#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn exit() {
    std::process::exit(0);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![exit])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
