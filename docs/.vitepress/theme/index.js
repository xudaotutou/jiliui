import DefaultTheme from 'vitepress/theme'
import './index.css'
import './tailwind.css'
import ui from 'jiliui'
export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ui.install(ctx.app)
    }
}