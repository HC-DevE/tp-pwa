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
        extend: {
            colors: {
                'chathams-blue': {
                    '50': '#f3f7fc',
                    '100': '#e6f0f8',
                    '200': '#c8dfef',
                    '300': '#97c5e2',
                    '400': '#5fa6d1',
                    '500': '#3a8bbd',
                    '600': '#2a6f9f',
                    '700': '#22577e',
                    '800': '#204c6c',
                    '900': '#20415a',
                    '950': '#15293c',
                },
                
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}