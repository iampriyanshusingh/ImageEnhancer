# 📸 Image Enhancer Web App

### ✨ Enhance your images with AI-powered upscaling

## 🚀 Features

- 📷 **Upload** any image
- 🖼️ **AI-powered enhancement** for better resolution
- 📥 **Download enhanced images**
- 🎨 **Smooth UI & easy-to-use**

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend API:** Axios (for API calls)
- **AI Processing:** Third-party image enhancement API

---

## 📦 Installation

### Clone the Repository

```sh
git clone https://github.com/iampriyanshusingh/ImageEnhancer.git
cd image-enhancer
```

### Install Dependencies

```sh
npm install
```

### Create `.env` File

```sh
touch .env
```

Add your API key inside `.env`:

```
REACT_APP_API_KEY=your_api_key_here
```

### Start the Development Server

```sh
npm start
```

---

## 🖼️ Usage

1. **Upload an image** from your local device.
2. **Click Enhance** to send it to the AI processor.
3. **Wait for processing** (tracked with a loading indicator).
4. **Download** the enhanced image.

---

## 📌 Folder Structure

```
📂 image-enhancer/
│-- 📂 src/
│   │-- 📂 components/
│   │   ├── ImageUploader.js
│   │   ├── ImagePreview.js
│   │   ├── Loading.js
│   │-- 📂 api/
│   │   ├── enhancedImageAPI.js
│   │-- App.js
│   │-- index.js
│-- .env (ignored in Git)
│-- .gitignore
│-- README.md
│-- package.json
```

---

## 📜 License

This project is **MIT Licensed**. Feel free to modify and improve it!

---

## 🙌 Contribution

Contributions are welcome! Feel free to open issues and pull requests.

---

## 🌟 Acknowledgments

Thanks to open-source tools & AI APIs for making this possible! 🚀
