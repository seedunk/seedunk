import { defineConfig } from 'themekit-js'
 
const siteBase="/seedunk/"
export default defineConfig({
  title: "Seedunk",  
  base:siteBase,
  themeName: "default theme + customization",
  description: "A VitePress Site",
  
  themeConfig: {
    logo:  '/seedunk.png', 
    nav: [
      { text: '主页', link: '/' },
     
    ], 
  
    footer: {
      message: '',
      copyright: 'Copyright © 2019-2024 Seedunk'
    }
  }
})
