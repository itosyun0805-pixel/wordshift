#!/usr/bin/env python3
"""Cut a ~15s Stories edit out of the full promo using the scene marks recorded during capture."""
import json, subprocess
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / 'promo' / 'out'
m = json.loads((OUT / 'marks.json').read_text())
full = OUT / 'wordshift_story_1080x1920.mp4'
segs = [(0.0, 1.8), (m['acq'] - 0.1, 2.3), (m['choice'], 2.4), (m['label'], 2.2), (m['hit'] - 0.3, 2.9), (m['end'] + 0.2, 3.2)]
parts, labels = [], ''
for i, (a, d) in enumerate(segs):
    parts.append(f'[0:v]trim=start={a:.3f}:duration={d:.3f},setpts=PTS-STARTPTS[v{i}];[0:a]atrim=start={a:.3f}:duration={d:.3f},asetpts=PTS-STARTPTS[a{i}]')
    labels += f'[v{i}][a{i}]'
fc = ';'.join(parts) + f';{labels}concat=n={len(segs)}:v=1:a=1[v][a];[a]afade=t=out:st={sum(d for _, d in segs) - 0.8:.2f}:d=0.8[af]'
dst = OUT / 'wordshift_story_15s_1080x1920.mp4'
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(full), '-filter_complex', fc, '-map', '[v]', '-map', '[af]',
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', str(dst)], check=True)
print('wrote', dst, f'({sum(d for _, d in segs):.1f}s)')
