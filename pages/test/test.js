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
          // delta: -2,
          success: () => {
            console.log('=successsuccesssuccess')
          },
          complete: () => {
            console.log('=completecompletecompletecomplete')
          },
          fail: () => {
            console.log('=failfailfailfail')
          },
        })
    }
})
