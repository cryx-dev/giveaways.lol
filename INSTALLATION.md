# 🚀 Installation Guide - giveaways.lol

A complete guide to getting the giveaways.lol Discord bot up and running!

---

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (18+ or higher) - [Download here](https://nodejs.org)
- **npm** or **yarn** package manager (comes with Node.js)
- **A Discord Bot Token** - [Create one here](https://discord.com/developers/applications)
- **Git** (optional, for cloning the repository)

---

## 🔧 Step-by-Step Installation

### Step 1️⃣: Clone the Repository

```bash
git clone https://github.com/cryx-dev/giveaways.lol
cd giveaways.lol
```

Or download the ZIP file directly from GitHub and extract it.

---

### Step 2️⃣: Create Configuration File

In the **root directory** of the project, create a file named `config.json`:

```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN_HERE",
  "everyoneMention": false,
  "hostedBy": true,
  "guildId": "YOUR_SERVER_ID_HERE"
}
```

**Configuration Details:**

| Option | Type | Description |
|--------|------|-------------|
| `token` | String | Your Discord bot authentication token |
| `everyoneMention` | Boolean | Set to `true` to mention @everyone in giveaways (default: `false`) |
| `hostedBy` | Boolean | Show "Hosted by" message in giveaway embeds (default: `true`) |
| `guildId` | String | Your Discord server ID (optional - for default guild) |

#### 🔐 How to Get Your Discord Bot Token:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" tab
4. Click "Add Bot"
5. Under the "TOKEN" section, click "Copy"
6. Paste it in your `config.json` file

#### 📍 How to Get Your Server ID:

1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click your server name and select "Copy Server ID"
3. Paste it in your `config.json` file

---

### Step 3️⃣: Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

This will download all required packages including:
- `discord.js` - Discord API wrapper
- `discord-giveaways` - Giveaway functionality
- Other dependencies

---

### Step 4️⃣: Start the Bot

Using Node.js:
```bash
node index.js
```

Or using npm script (if configured):
```bash
npm start
```

You should see a message like:
```
✅ Bot is online!
🎁 Giveaway bot is ready to use
```

---

## 🌐 Invite Bot to Your Server

1. Go back to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your application
3. Go to "OAuth2" → "URL Generator"
4. Select scopes: `bot`, `applications.commands`
5. Select permissions:
   - Send Messages
   - Embed Links
   - Read Message History
   - Add Reactions
   - Use Slash Commands
6. Copy the generated URL and open it in your browser
7. Select your server and authorize

---

## ✨ Verify Installation

Once the bot is running and invited to your server:

1. Go to your Discord server
2. Type `/` to see available commands
3. You should see the giveaway commands:
   - `/start-giveaway`
   - `/end-giveaway`
   - `/reroll-giveaway`
   - `/pause-giveaway`
   - `/unpause-giveaway`
   - `/drop-giveaway`

---

## 🚀 Quick Deploy Options

### Deploy to Railway (One-Click)

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/template/fqK7Bm?referralCode=cryx-dev)

1. Click the button above
2. Connect your GitHub account
3. Add your Discord bot token when prompted
4. Railway will automatically deploy your bot!

---

## 🐛 Troubleshooting

### "Cannot find module" Error
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Bot Won't Start
- ✅ Check your `config.json` syntax (use a JSON validator)
- ✅ Verify your bot token is correct
- ✅ Make sure Node.js is installed: `node --version`

### Commands Not Appearing
- ✅ Wait 1 minute for Discord to sync slash commands
- ✅ Use `/` to refresh the command list
- ✅ Verify bot has "applications.commands" scope

### Bot Goes Offline
- ✅ Check your internet connection
- ✅ Verify your token hasn't been regenerated
- ✅ Check console for error messages

---

## 📚 Next Steps

- 📖 Read the [README](README.md) for feature overview
- 🤝 Check out [Contributing Guidelines](README.md#-contributing)
- 💬 Join the community for support

---

## ❓ Need Help?

- 📝 Open an [issue](https://github.com/cryx-dev/giveaways.lol/issues) on GitHub
- 💬 Check existing issues for solutions
- 🔗 Review the [Discord.js documentation](https://discord.js.org)

---

**Happy hosting! 🎉**
