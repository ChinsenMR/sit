const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    extendDefaultPlugins
} = require("customize-cra");
const theme = require("./package.json").theme; // 用于配置antd主题颜色

const path = require('path');

const SVGO = require('svgo');

const configSelector = () => (config, env) => {
    const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
    config.module.rules[oneOf_loc].oneOf = [{
            test: /\.svg$/,
            use: [{
                    loader: 'svg-sprite-loader',
                    options: {}
                },
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [{
                            name: 'removeAttrs',
                            params: {
                                attrs: 'fill'
                            }
                        }]
                    }
                }
            ]
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]

    return config;
}
module.exports = override(
    configSelector(),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: theme
        }
    }),
    //按需加载antd
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css' // true是less，如果不用less style的值可以写'css' 
    }),
    //别名配置
    addWebpackAlias({
        ['@']: path.resolve(__dirname, './src'),
        ['@components']: path.resolve(__dirname, './src/components'),
        ['@lib']: path.resolve(__dirname, './src/lib'),
        ['@pages']: path.resolve(__dirname, './src/pages')
    })
);