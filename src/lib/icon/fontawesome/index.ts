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

type IOptions = {
  duotone: boolean;
  sharp: boolean;
  duotoneSharp: boolean;
};

const install = (entryOptions: Partial<IOptions>) => {
  const options: IOptions = {
    duotone: false,
    sharp: false,
    duotoneSharp: false,
    ...entryOptions,
  };
  let fonst = [
    './css/all.css',
    ...(options.duotone
      ? ['./css/duotone-light.css', './css/duotone-thin.css', './css/duotone-regular.css']
      : []),
    ...(options.sharp
      ? [
          './css/sharp-light.css',
          './css/sharp-regular.css',
          './css/sharp-solid.css',
          './css/sharp-thin.css',
        ]
      : []),
    ...(options.duotoneSharp
      ? [
          './css/sharp-duotone-light.css',
          './css/sharp-duotone-regular.css',
          './css/sharp-duotone-solid.css',
          './css/sharp-duotone-thin.css',
        ]
      : []),
  ];
  fonst.forEach((item) => {
    import(item);
  });
};

export default { install };
