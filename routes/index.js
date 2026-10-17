import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    year: new Date().getFullYear(),
    profile: {
      name: "Wai Yan Hein",
      handle: "@programmerMrleader",
      displayName: "FireFlux",
      url: "https://github.com/programmerMrleader",
      avatarUrl: "https://avatars.githubusercontent.com/u/92500284?v=4",
      repositoryCount: 7,
    },
    projects: [
      {
        name: "SDL2 Space Shooter",
        description: "A space shooter game built with SDL2.",
        detail: "SDL2 · GAME",
        art: "space",
        url: "https://github.com/programmerMrleader/sdl2_space_shooter",
        tags: ["C++", "SDL2", "Game"],
      },
      {
        name: "ESP32 Telegram Bot",
        description: "A Telegram bot built for ESP32 with Wi-Fi and an LCD.",
        detail: "ESP32 · HARDWARE",
        art: "esp32",
        url: "https://github.com/programmerMrleader/esp32_telegram_bot",
        tags: ["C++", "ESP32", "Telegram"],
      },
      {
        name: "Notepad By Wai",
        description: "A Windows notepad clone made with the Win32 API.",
        detail: "WIN32 · DESKTOP APP",
        art: "notepad",
        url: "https://github.com/programmerMrleader/Notepad-By-Wai",
        tags: ["C++", "Win32 API", "Windows"],
      },
      {
        name: "FromScratchOs",
        description: "An early operating-system project built from scratch.",
        detail: "C · OS EXPERIMENT",
        art: "os",
        url: "https://github.com/programmerMrleader/FromScratchOs",
        tags: ["C", "Operating systems", "Learning"],
      },
    ],
  });
});

export default router;
