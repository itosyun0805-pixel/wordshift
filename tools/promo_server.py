#!/usr/bin/env python3
"""Local-only static server for recording the promo video.
Serves the project folder and accepts POST /upload?name=FILE (writes to promo/out/FILE)."""
import http.server, sys
from pathlib import Path
from urllib.parse import urlparse, parse_qs

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'promo' / 'out'


class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)

    def do_POST(self):
        u = urlparse(self.path)
        if u.path != '/upload':
            self.send_error(404); return
        name = Path(parse_qs(u.query).get('name', ['upload.bin'])[0]).name
        data = self.rfile.read(int(self.headers.get('Content-Length', 0)))
        OUT.mkdir(parents=True, exist_ok=True)
        (OUT / name).write_bytes(data)
        self.send_response(200); self.end_headers(); self.wfile.write(b'ok')

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8790
    http.server.ThreadingHTTPServer(('127.0.0.1', port), H).serve_forever()
