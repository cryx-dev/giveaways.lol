# 🎁 giveaways.lol

<div align="center">

[![Discord.py](https://img.shields.io/badge/discord.py-2.0+-blue?style=for-the-badge&logo=discord)](https://discordpy.readthedocs.io)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-red?style=for-the-badge)](https://github.com/cryx-dev/giveaways.lol/pulls)
[![GitHub stars](https://img.shields.io/github/stars/cryx-dev/giveaways.lol?style=for-the-badge&logo=github)](https://github.com/cryx-dev/giveaways.lol)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/cryx-dev/giveaways.lol)

</div>

---

## 📌 About

A powerful and feature-rich **Discord Giveaway Bot** with slash commands, built using the [discord-giveaways](https://npmjs.com/discord-giveaways) package. Perfect for hosting giveaways in your Discord server!

---

## ✨ Features

<table>
  <tr>
    <td>⚡ Slash Commands</td>
    <td>🔧 Easy Configuration</td>
  </tr>
  <tr>
    <td>📊 Giveaway Management</td>
    <td>⏱️ Flexible Scheduling</td>
  </tr>
  <tr>
    <td>🎲 Random Winner Selection</td>
    <td>📝 Detailed Logging</td>
  </tr>
</table>

### Commands

- `/start-giveaway` - Start a new giveaway
- `/end-giveaway` - End an active giveaway
- `/reroll-giveaway` - Pick new winners
- `/pause-giveaway` - Pause giveaway entries
- `/unpause-giveaway` - Resume giveaway entries
- `/drop-giveaway` - Quick giveaway drops

---

## 📸 Screenshots

<div align="center">

| Giveaway Display | Entry UI |
|---|---|
| <img src="https://zupimages.net/up/23/01/9b7r.png" width="400" alt="Giveaway Display"/> | <img src="https://zupimages.net/up/23/01/fx0b.png" width="300" alt="Entry UI"/> |

</div>

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager
- A Discord bot token

### Step-by-step Guide

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/cryx-dev/giveaways.lol
cd giveaways.lol
```

#### 2️⃣ Configuration
Create a `config.json` file in the root directory: (.env coming soon)

```json
{
  "token": "Your Discord bot token",
  "everyoneMention": false,
  "hostedBy": true,
  "guildId": "Your server id"
}
```

**Configuration Options:**
- `token`: Your Discord bot authentication token
- `everyoneMention`: Whether to mention @everyone in giveaways
- `hostedBy`: Show "Hosted by" message
- `guildId`: Default guild ID for the bot

#### 3️⃣ Install Dependencies
```bash
npm install
```

#### 4️⃣ Start the Bot
```bash
node index.js
```

---

## 🚄 Deploy in One Click

<div align="center">

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/template/fqK7Bm?referralCode=cryx-dev)

</div>

Deploy this bot instantly to Railway with a single click. Just add your Discord bot token when prompted!

---

## 📚 Usage

Once the bot is running, use slash commands in your Discord server:

```
/start-giveaway prize:"Nintendo Switch" duration:"7 days" winners:1
/end-giveaway giveaway_id:123456789
/reroll-giveaway giveaway_id:123456789
```

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 18+ | JavaScript runtime |
| **discord-giveaways** | Latest | Giveaway functionality |
| **Discord.js** | Latest | Discord API wrapper |

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/cryx-dev/giveaways.lol/pulls).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

Need help? Open an [issue](https://github.com/cryx-dev/giveaways.lol/issues) or check our documentation.

---

<div align="center">

**Made with ❤️ by cryx-dev**

⭐ If you find this useful, please give it a star!

</div>
