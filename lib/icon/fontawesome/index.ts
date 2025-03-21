// import './css/all.css'
// import './css/duotone-light.css'
// import './css/duotone-thin.css'
// import './css/duotone-regular.css'
// import './css/sharp-duotone-light.css'
// import './css/sharp-duotone-regular.css'
// import './css/sharp-duotone-solid.css'
// import './css/sharp-duotone-thin.css'
// import './css/sharp-light.css'
// import './css/sharp-regular.css'
// import './css/sharp-solid.css'

// import './css/sharp-thin.css'

const install = () => {
  let fonst = [
    './css/all.css',
    './css/duotone-light.css',
    './css/duotone-thin.css',
    './css/duotone-regular.css',
    './css/sharp-duotone-light.css',
    './css/sharp-duotone-regular.css',
    './css/sharp-duotone-solid.css',
    './css/sharp-duotone-thin.css',
    './css/sharp-light.css',
    './css/sharp-regular.css',
    './css/sharp-solid.css',
    './css/sharp-thin.css',
  ]
  fonst.forEach((item) => {
    import(item)
  })
}

export default { install }
