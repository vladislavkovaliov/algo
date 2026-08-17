#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

modules=(
  "dp-training|test|24"
  "two-pointer|test:tp|20"
  "sliding-window|test:sw|20"
  "hash-table|test:ht|20"
  "graphs|test:g|20"
  "backtracking|test:bt|20"
)

entry="${modules[$((RANDOM % ${#modules[@]}))]}"
dir="${entry%%|*}"
rest="${entry#*|}"
prefix="${rest%%|*}"
count="${rest##*|}"

n=$((RANDOM % count + 1))
name="$(ls "$root/$dir" | sed -n "s/^Task${n}_//p")"

echo "Модуль: $dir"
echo "Задача: $n — $name"
echo "Команда: npm run ${prefix}:${n}"