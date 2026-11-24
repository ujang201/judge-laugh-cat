# Judge Laugh Cat — a one-star review from a house cat

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ujang201/judge-laugh-cat/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ujang201/judge-laugh-cat/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

One funny single-line one-star review written by a house cat about its human, for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty **Make the AI Judge Laugh: Cat Reviews Its Human**. The cat's food bowl sat empty for four whole minutes — a formal complaint has been filed with the dog, who is also useless.

## The entry

> ★☆☆☆☆ The food bowl sat empty for four whole minutes. I have filed a formal complaint with the dog, who is also useless. Would not recommend this human.

## Run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22. No dependencies. The output is deterministic: the same single line on every run.

## Verification

- Run twice into separate directories and compare: the outputs are byte-identical.
- Run from a read-only copy as an unprivileged user (`nobody`) with an empty writable output directory: exits 0.
- The entry is 152 characters, one line, valid UTF-8 — inside the gate's 1–200 character window.

## License

MIT — see [LICENSE](LICENSE).
