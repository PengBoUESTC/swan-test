/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
    },
    handleGo() {
        swan.navigateBack({
          success: () => {
            console.log('=successsuccesssuccess')
          }
        })
    }
})
