/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
    },
    handleGo() {
        swan.navigateTo({
            url: '/pages/test/test'
        })
    }
})
