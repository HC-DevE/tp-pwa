module.exports={
    content:[
        './src/components/**/*.vue',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        './src/plugins/**/*.ts',
        './nuxt.config.ts'
    ],
    // purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    darkMode: true, // or 'media' or 'class' or'false'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}