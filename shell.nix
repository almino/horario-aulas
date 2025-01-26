# Run with `nix-shell shell.nix`
let pkgs = import <nixpkgs> { }; in
pkgs.mkShell {
  buildInputs = with pkgs;[
    at-spi2-atk
    atkmm
    cairo
    gdk-pixbuf
    glib
    gtk3
    harfbuzz
    librsvg
    libsoup_3
    pango
    webkitgtk_4_1
    openssl
  ];

  nativeBuildInputs = with pkgs; [
    pkg-config
    gobject-introspection
    cargo
    cargo-tauri
    nodejs
    bun
  ];
  # shellHook = "";
}
