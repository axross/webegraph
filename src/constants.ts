export const FALLBACK_MAX_AGE = 60 * 60 * 12;

export const IMMUTABLE_MAX_AGE = 60 * 60 * 24 * 30;

export const REDIS_CACHE_URL =
  Deno.env.get("REDIS_CACHE_URL") ?? Deno.env.get("FLY_REDIS_CACHE_URL");

export const FETCHER_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36";

// export const FALLBACK_IMAGE_URL =
//   "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48Zz48cGF0aCBkPSJNMCAwaDI1NnYyNTZIMHoiLz48cGF0aCBkPSJNMTI4LjE2MiAzNC43NjFjMTguMDY2IDAgMzQuMzE4IDcuNzY3IDQ1LjYgMjAuMTQ0bC4zNDYuMzgzLS4xNzItLjE5aDMwLjA0N2M5LjUwMiAwIDE3LjIwNSA3LjcyNiAxNy4yMDUgMTcuMjV2MTA3LjQ2YzAgOS41MjYtNy43MDMgMTcuMjUtMTcuMjA1IDE3LjI1SDE0My4wOGw3LjM4NSAyNC4xM2gtNDQuOTNsNy4zODUtMjQuMTNINTIuMDE4Yy05LjUwMyAwLTE3LjIwNS03LjcyNC0xNy4yMDUtMTcuMjVWNzIuMzQ5YzAtOS41MjQgNy43MDItMTcuMjUgMTcuMjA1LTE3LjI1aDMwLjM2OGwtLjAyNi4wMjguMjctLjI5OGMxMC40OTItMTEuNDcxIDI1LjI2LTE4Ljk2NSA0MS43ODItMTkuOTU0YTYyLjEzMiA2Mi4xMzIgMCAwMTMuNzUtLjExM3ptLTUyLjkxIDIzLjQxNWE2LjU2NCA2LjU2NCAwIDAwLTYuNDgzIDcuNjFINTIuMTE1Yy0zLjI4MyAwLTUuOTU4IDIuNjA4LTYuMDc4IDUuODdsLS4wMDQuMjI4djk2Ljc2NWMwIDMuMjkgMi42IDUuOTczIDUuODU0IDYuMDkzbC4yMjguMDA0aDE0NC4yN2MzLjM2IDAgNi4wODMtMi43MyA2LjA4My02LjA5N1Y3MS44ODRjMC0zLjM2OC0yLjcyMy02LjA5OC02LjA4My02LjA5OGg3LjUtMjIuMTg3bC0uMDY4LS4xMmM1LjIyNiA5LjA2IDguMjE2IDE5LjU3IDguMjE2IDMwLjc4IDAgMzQuMDY0LTI3LjYxOSA2MS42ODMtNjEuNjg0IDYxLjY4My0xLjI2IDAtMi41MDktLjAzNy0zLjc1LS4xMTItMzIuMzIxLTEuOTQtNTcuOTM0LTI4Ljc2Ny01Ny45MzQtNjEuNTcyIDAtOS4yNTQgMi4wMzgtMTguMDMzIDUuNjktMjUuOTExLjkyLjQ5IDEuOTcuNzY3IDMuMDg0Ljc2N2E2LjU2NCA2LjU2NCAwIDAwNi41NjUtNi41NjIgNi41NjQgNi41NjQgMCAwMC02LjU2NS02LjU2M3ptNTIuOTA5IDUxLjE4YTYuNTY0IDYuNTY0IDAgMDAtNi41NjYgNi41NjIgNi41NjQgNi41NjQgMCAwMDYuNTY2IDYuNTYyIDYuNTY0IDYuNTY0IDAgMDA2LjU2NS02LjU2MiA2LjU2NCA2LjU2NCAwIDAwLTYuNTY1LTYuNTYzem0zNS43MDctMzkuNDMyYTYuNTY0IDYuNTY0IDAgMDAtNi41NjYgNi41NjMgNi41NjQgNi41NjQgMCAwMDYuNTY2IDYuNTYyIDYuNTY0IDYuNTY0IDAgMDA2LjU2NS02LjU2MiA2LjU2NCA2LjU2NCAwIDAwLTYuNTY1LTYuNTYzeiIgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iIzgzOTVBNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTIwMy45ODMgNTUuMDk5YzkuNTAyIDAgMTcuMjA1IDcuNzI1IDE3LjIwNSAxNy4yNXYxMDcuNDZjMCA5LjUyNS03LjcwMyAxNy4yNS0xNy4yMDUgMTcuMjVoLTcuNWM5LjUwMiAwIDE3LjIwNS03LjcyNSAxNy4yMDUtMTcuMjVWNzIuMzQ5YzAtOS41MjUtNy43MDMtMTcuMjUtMTcuMjA1LTE3LjI1aDcuNXptLTc1LjgyMS0yMC4zMzdjMzQuMDY1IDAgNjEuNjg0IDI3LjYxNCA2MS42ODQgNjEuNjgzIDAgMzQuMDY1LTI3LjYxOSA2MS42ODQtNjEuNjg0IDYxLjY4NC0xLjI2IDAtMi41MDktLjAzNy0zLjc1LS4xMTIgMzIuMzIxLTEuOTQgNTcuOTM0LTI4Ljc2NyA1Ny45MzQtNjEuNTcyIDAtMzIuODA4LTI1LjYxMy01OS42MzItNTcuOTM0LTYxLjU3MWE2Mi4xMzIgNjIuMTMyIDAgMDEzLjc1LS4xMTN6IiBmaWxsLW9wYWNpdHk9Ii43NSIgZmlsbD0iIzgzOTVBNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTIwMy45ODEgNTIuMzU0YzEwLjkyNCAwIDE5LjgzMiA4LjgxIDIwLjAxNiAxOS43MWwuMDAzLjM0NnYxMDcuNDE1YzAgMTAuOTQ0LTguNzk0IDE5Ljg2OC0xOS42NzQgMjAuMDUzbC0uMzQ1LjAwM2gtNTcuMDk4bDUuNjYzIDE4LjQ5NGgxMi40NzNhMi44MTIgMi44MTIgMCAwMS4xNzEgNS42MmwtLjE3MS4wMDVIOTAuOThhMi44MTIgMi44MTIgMCAwMS0uMTcxLTUuNjJsLjE3MS0uMDA1aDEyLjQ3M2w1LjY2My0xOC40OTVINTIuMDJjLTEwLjkyNCAwLTE5LjgzMi04LjgxLTIwLjAxNi0xOS43MWwtLjAwMy0uMzQ1di0xOS45MWEyLjgxMiAyLjgxMiAwIDAxNS42Mi0uMTcybC4wMDUuMTcxdjE5LjkxMWMwIDcuODUyIDYuMjg4IDE0LjI2IDE0LjA4MSAxNC40MjdsLjMxMy4wMDNIMjAzLjk4YzcuODMzIDAgMTQuMjI0LTYuMzA0IDE0LjM5LTE0LjExN2wuMDA0LS4zMTNWNzIuNDA5YzAtNy44NTItNi4yODgtMTQuMjYtMTQuMDgxLTE0LjQyN2wtLjMxMy0uMDAzaC0xNi4wMDVhMi44MTIgMi44MTIgMCAwMS0uMTcxLTUuNjJsLjE3MS0uMDA1aDE2LjAwNXpNMTQxIDE5OS44OGgtMjZsLTUuNjYzIDE4LjQ5NGgzNy4zMjZMMTQxIDE5OS44ODF6bS03My40OS0xNi43NjVhMi44MTIgMi44MTIgMCAwMS4xNzIgNS42MmwtLjE3MS4wMDVINTYuMDJhMi44MTIgMi44MTIgMCAwMS0uMTcxLTUuNjJsLjE3MS0uMDA1aDExLjQ5em0yMi41IDBhMi44MTIgMi44MTIgMCAwMS4xNzIgNS42MmwtLjE3MS4wMDVINzguNTJhMi44MTIgMi44MTIgMCAwMS0uMTcxLTUuNjJsLjE3MS0uMDA1aDExLjQ5ek01Ny40MTIgNjMuMDM4YTIuODEyIDIuODEyIDAgMDEuMTcxIDUuNjJsLS4xNy4wMDVoLTUuMjk4YTMuMjc4IDMuMjc4IDAgMDAtMy4yNjIgMy4wOTVsLS4wMDUuMTg2djk2LjcyN2EzLjI4IDMuMjggMCAwMDMuMDgyIDMuMjc2bC4xODUuMDA1aDE1MS43NzJhMy4yNzggMy4yNzggMCAwMDMuMjYyLTMuMDk1bC4wMDYtLjE4NnYtMjguMzM4YTIuODEyIDIuODEyIDAgMDE1LjYyLS4xNzJsLjAwNS4xNzJ2MjguMzM4YzAgNC44MjQtMy44NDkgOC43NjMtOC42MzEgOC45MDJsLS4yNjIuMDA0SDUyLjExNGMtNC44MTYgMC04Ljc1LTMuODUzLTguODg5LTguNjQzbC0uMDA0LS4yNjNWNzEuOTQ0YzAtNC44MjQgMy44NDktOC43NjMgOC42MzEtOC45MDNsLjI2Mi0uMDAzaDUuMjk3em0yMi45OTggOTQuMDk1YTIuODEyIDIuODEyIDAgMDEuMTcxIDUuNjJsLS4xNzEuMDA1SDYwLjg2N2EyLjgxMiAyLjgxMiAwIDAxLS4xNy01LjYybC4xNy0uMDA1SDgwLjQxek0xMjguMTYyIDMyYzM1LjU4IDAgNjQuNTI1IDI4LjkyMiA2NC41MjUgNjQuNDcyIDAgNy4wOTktMS4xNDcgMTQuMDc2LTMuNDExIDIwLjczOWEyLjgxNCAyLjgxNCAwIDAxLTMuNTY4IDEuNzU4IDIuODEzIDIuODEzIDAgMDEtMS43NTgtMy41NjggNTguNTMgNTguNTMgMCAwMDIuOTk5LTE1LjI0OGwuMDQ3LS44NjloLTE4LjQzOGMtLjM5IDE0LjY5OC0zLjgzMyAyOC41My05LjgzMyAzOS41NDZhNzguMDQxIDc4LjA0MSAwIDAxNy4xOSAyLjgxIDU5LjIyMiA1OS4yMjIgMCAwMDEzLTE1LjI4NyAyLjgxMyAyLjgxMyAwIDAxNC44NDEgMi44NjMgNjQuODc4IDY0Ljg3OCAwIDAxLTIzLjEyNyAyMi45ODFjLTkuNjAyIDUuNTk3LTIwLjU1NCA4LjYxMi0zMS43MjIgOC43NGwtLjc0NS4wMDRjLTM1LjU4IDAtNjQuNTI2LTI4LjkyMS02NC41MjYtNjQuNDcgMC04LjY5NyAxLjY5NS0xNy4xMDIgNS4wNC0yNS4wMmE5LjM0MiA5LjM0MiAwIDAxLTIuODAxLTYuNjczYzAtNS4xNjggNC4yMDctOS4zNzIgOS4zNzgtOS4zNzIuOTggMCAxLjkyNC4xNSAyLjgxMi40MyA1LjY4OC02Ljk4NSAxMi44NjMtMTIuNzg3IDIwLjg3MS0xNi44NTkgOS4xMDYtNC42MyAxOC45MzktNi45NzcgMjkuMjI2LTYuOTc3em0yLjgxMyAxMDcuNzM1djE1LjM4OGM2Ljk1LS45NTYgMTMuNTM2LTUuNDQ0IDE5LjAwOC0xMi45NDgtNS42NzctMS4zNTMtMTEuNjkyLTIuMTY0LTE3LjkxLTIuNDAzbC0xLjA5OS0uMDM3em0tNS42MjUgMGMtNi42MDguMTgyLTEyLjk5OCAxLjAwNy0xOS4wMSAyLjQ0IDUuMzY0IDcuMzU0IDExLjc5NiAxMS44MTEgMTguNTkzIDEyLjg4N2wuNDE2LjA2MXYtMTUuMzg4em0zMC4zODMgNC4wMzNjLTEuOTE4IDIuODUtMy45ODMgNS4zNjktNi4xNyA3LjUzOGE1OC4zNSA1OC4zNSAwIDAwMTEuMTI4LTUuNzcxIDc0Ljg5MyA3NC44OTMgMCAwMC00Ljk1OC0xLjc2N3ptLTU1LjE0MiAwYTc0Ljg3IDc0Ljg3IDAgMDAtNC45MzIgMS43NTYgNTguODIzIDU4LjgyMyAwIDAwMTEuMDg2IDUuNzY3Yy0yLjE4MS0yLjE2Ni00LjI0Mi00LjY4LTYuMTU0LTcuNTIzek02MC4xODUgNTIuMzU0YTIuODEyIDIuODEyIDAgMDEuMTcyIDUuNjJsLS4xNzIuMDA1SDUyLjAyYy03LjgzMiAwLTE0LjIyNCA2LjMwNC0xNC4zOSAxNC4xMTdsLS4wMDQuMzE0djc0LjQyM2EyLjgxMiAyLjgxMiAwIDAxLTUuNjIuMTdsLS4wMDUtLjE3VjcyLjQxYzAtMTAuOTQ0IDguNzk0LTE5Ljg2OCAxOS42NzQtMjAuMDUzbC4zNDUtLjAwM2g4LjE2NnptMTIuNzM1IDkxLjY1NGEyLjgxMiAyLjgxMiAwIDAxLjE3MiA1LjYybC0uMTcyLjAwNUg2MC44NjdhMi44MTIgMi44MTIgMCAwMS0uMTctNS42MmwuMTctLjAwNUg3Mi45MnptMTQuODQ2LTQ0LjcyNUg2OS4zMjhjLjgwNCAxNi45ODMgOC44NDYgMzIuMTAzIDIxLjEwNiA0Mi4zNDRhNzguMDg2IDc4LjA4NiAwIDAxNy4xNjYtMi43OThjLTUuODg1LTEwLjgwMy05LjMxLTI0LjMxNy05LjgwOC0zOC42OTlsLS4wMjYtLjg0N3ptNzUuMTY1IDBoLTMxLjk1N3Y3LjcxMWMzLjgwMiAxLjE5NyA2LjU2NiA0Ljc1MyA2LjU2NiA4Ljk0MiAwIDQuMDk0LTIuNjQgNy41ODQtNi4zMDggOC44NTdsLS4yNTcuMDg1djkuMjNjNy43NS4yMDMgMTUuMjM2IDEuMjQ1IDIyLjIyNyAzLjA3NiA1LjgwNi0xMC4xNiA5LjItMjMuMTUxIDkuNzAzLTM3LjA4bC4wMjYtLjgyem0tMzcuNTgyIDBIOTMuMzk0Yy4zOTggMTQuMjQgMy44MDkgMjcuNTQxIDkuNzMgMzcuOSA2LjY3Mi0xLjc0NyAxMy43OTctMi43NzUgMjEuMTcxLTMuMDQybDEuMDU2LS4wMzN2LTkuMjNjLTMuODAxLTEuMTk3LTYuNTY2LTQuNzUzLTYuNTY2LTguOTQyIDAtNC4wOTQgMi42NC03LjU4MyA2LjMwOC04Ljg1NmwuMjU4LS4wODZ2LTcuNzF6bTc4LjUzNy0zNi4yNDVjNC44MTYgMCA4Ljc1IDMuODUzIDguODg5IDguNjQzbC4wMDQuMjYzdjU1LjE0OGEyLjgxMiAyLjgxMiAwIDAxLTUuNjIuMTcxbC0uMDA1LS4xNzFWNzEuOTQ0YTMuMjggMy4yOCAwIDAwLTMuMDgzLTMuMjc2bC0uMTg1LS4wMDVoLTEwLjAxYTIuODEyIDIuODEyIDAgMDEtLjE3Mi01LjYybC4xNzEtLjAwNWgxMC4wMXptLTc1LjcyNCA0OS4xNWEzLjc1NSAzLjc1NSAwIDAwLTMuNzUzIDMuNzQ4IDMuNzU0IDMuNzU0IDAgMDA3LjUwNiAwIDMuNzU1IDMuNzU1IDAgMDAtMy43NTMtMy43NDd6bTM3LjcyNy02MC44NzRhNzguMTE4IDc4LjExOCAwIDAxLTcuMTY0IDIuNzk4YzIuMTUyIDMuOTU1IDQgOC4zMzIgNS40OTggMTMuMDQzIDUuMDA3LjE4NyA5LjAyMyA0LjMxNiA5LjAyMyA5LjM2NiAwIDMuNzA0LTIuMTYgNi45MTItNS4yODkgOC40MzMuMjc1IDIuNDU3LjQ2MiA0Ljk0Ny41NTkgNy40NTFsLjA0MSAxLjI1M2gxOC40MzhjLS44MDMtMTYuOTgyLTguODQ2LTMyLjEwMy0yMS4xMDYtNDIuMzQ0em0tMTIuNjkyIDQuNDQ1Yy02LjY3MiAxLjc0Ny0xMy43OTYgMi43NzUtMjEuMTY4IDMuMDQxbC0xLjA1NC4wMzN2MzQuODI1aDMxLjk1NWE5Ny42MDkgOTcuNjA5IDAgMDAtLjU0LTcuODgyYy00LjQ3MS0uNzEtNy45LTQuNTktNy45LTkuMjU2IDAtMy4zIDEuNzE2LTYuMjA3IDQuMzAzLTcuODc4LTEuNTI3LTQuNzUzLTMuNDE5LTkuMDc1LTUuNTk2LTEyLjg4M3ptLTYyLjc4Mi00LjQ1NGE1OS40NiA1OS40NiAwIDAwLTcuNzI4IDcuNzY2IDkuMzIzIDkuMzIzIDAgMDExLjk0NCA1LjcwN2MwIDUuMTY3LTQuMjA3IDkuMzcyLTkuMzc4IDkuMzcyLS41MyAwLTEuMDQ5LS4wNDQtMS41NTUtLjEzYTU4LjEgNTguMSAwIDAwLTQuMzI4IDE4LjgyM2wtLjA0My44MTVoMTguNDRjLjA4NC0zLjE0My4zMDktNi4yNzMuNjcyLTkuMzM3YTIuODEyIDIuODEyIDAgMTE1LjU4Ni42NjIgOTcuMTEzIDk3LjExMyAwIDAwLS41ODggNy40MjRsLS4wNDMgMS4yNWgzMS45NTZWNTguODM0Yy03Ljc1OS0uMjAzLTE1LjI1NC0xLjI0Ny0yMi4yNTEtMy4wODItMi43NjggNC44NjYtNS4wNzIgMTAuNTc3LTYuNzU5IDE2Ljk2NmEyLjgxNCAyLjgxNCAwIDAxLTMuNDM3IDIuMDAxIDIuODEyIDIuODEyIDAgMDEtMi4wMDEtMy40MzdjMS42ODEtNi4zNjkgMy45NTctMTIuMTM2IDYuNjk5LTE3LjE3YTc4LjA0IDc4LjA0IDAgMDEtNy4xODYtMi44MDZ6bTczLjQ1MyAyMS40NjhhMy43NTUgMy43NTUgMCAwMC0zLjc1MyAzLjc0OCAzLjc1NCAzLjc1NCAwIDAwMy43NTMgMy43NDcgMy43NTQgMy43NTQgMCAwMDMuNzUzLTMuNzQ3IDMuNzU1IDMuNzU1IDAgMDAtMy43NTMtMy43NDh6TTc1LjI1MyA2MS4wMzFhMy43NTQgMy43NTQgMCAwMC0zLjc1MyAzLjc0NyAzLjc1NSAzLjc1NSAwIDAwMy43NTMgMy43NDcgMy43NTUgMy43NTUgMCAwMDMuNzUzLTMuNzQ3IDMuNzU0IDMuNzU0IDAgMDAtMy43NTMtMy43NDd6bTUwLjA5Ny0yMy4yMTJjLTcuMDQ5Ljk3NS0xMy42NjIgNS41ODQtMTkuMDM2IDEyLjk0MSA1LjY4NCAxLjM1NyAxMS43MDkgMi4xNyAxNy45MzUgMi40MWwxLjEuMDM2VjM3Ljgyem01LjYyNS4wMDR2MTUuMzgzYzYuNi0uMTgyIDEyLjk4Ni0xLjAwNiAxOC45OTItMi40MzYtNS4yOC03LjE5Ni0xMS43NC0xMS43NzYtMTguNTc0LTEyLjg4NGwtLjQxOC0uMDYzem0tMjQuMTE5IDMuNzY0YTU5LjM3IDU5LjM3IDAgMDAtNS4zNyAyLjQwNSA1OC41NDMgNTguNTQzIDAgMDAtNS44NSAzLjQxNmMxLjYxNC42NCAzLjI2OCAxLjIzIDQuOTYgMS43NjcgMS45MjgtMi44NTIgNC4wMjYtNS4zOTMgNi4yNi03LjU4OHptNDIuNjkuMDUxYy4zNTcuMzU0LjcxLjcxNiAxLjA2MiAxLjA4OGE1MC41NzQgNTAuNTc0IDAgMDE1LjEyNiA2LjQ0NyA3NC45MjMgNzQuOTIzIDAgMDA0LjkzLTEuNzU2IDU4Ljc4MiA1OC43ODIgMCAwMC0xMS4xMTktNS43Nzl6IiBmaWxsPSIjODM5NUE3IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+";