name: PR
name: bot

on:
  pull_request:
    types: [labeled]

jobs:
  auto-approve:
  approve:
    if: "! startsWith(github.event.head_commit.message, '[CI Skip]') && (!github.event.pull_request || github.event.pull_request.head.repo.full_name == github.repository)"
    runs-on: ubuntu-latest
    steps:
      - uses: jacogr/action-approve@master
        with:
          authors: jacogr
          labels: automerge
          labels: -auto
          token: ${{ secrets.GH_PAT_BOT }}
