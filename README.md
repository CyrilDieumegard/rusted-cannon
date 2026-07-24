# Rusted Cannon

**Rusted Cannon** is a free, original pixel-art run-and-gun campaign that runs
directly in a modern web browser. No installation or account is required.

## Play

**[Play Rusted Cannon](https://cyrildieumegard.github.io/rusted-cannon/)**

Desktop controls:

- Move: `WASD` or arrow keys
- Fire: `Z` or `J`
- Jump: `X` or `K`
- Grenade: `C` or `L`
- Pause: `Escape`

Phones and tablets use the on-screen multitouch controls. Landscape mode is
required for the intended arcade layout.

## Campaign

1. Ash Boulevard
2. Green Hell Run
3. Iron Hive

The campaign includes vehicles, rescued POWs, destructible scenery, three
multi-phase bosses, mission ranks, difficulty settings, and three original
high-density pixel-art environments.

## Run locally

Serve the directory with any static web server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Opening `index.html` directly also works, except for installable/offline PWA
features which require HTTP or HTTPS.

## License

The game code and original visual assets are released under the [MIT License](LICENSE).
The three soundtrack files are CC0; their authors and sources are listed in
[AUDIO_CREDITS.md](AUDIO_CREDITS.md).

Rusted Cannon is an original project and is not affiliated with SNK or any
other game publisher.
