type IOptions = {
  duotone: boolean;
  sharp: boolean;
  duotoneSharp: boolean;
  prefix: string;
};

const install = (entryOptions: Partial<IOptions>) => {
  const options: IOptions = {
    duotone: false,
    sharp: false,
    duotoneSharp: false,
    prefix: '',
    ...entryOptions,
  };
  let fonst = [
    `${options.prefix}css/all.css`,
    ...(options.duotone
      ? [
          `${options.prefix}css/duotone-light.css`,
          `${options.prefix}css/duotone-thin.css`,
          `${options.prefix}css/duotone-regular.cs`,
        ]
      : []),
    ...(options.sharp
      ? [
          `${options.prefix}css/sharp-light.css`,
          `${options.prefix}css/sharp-regular.css`,
          `${options.prefix}css/sharp-solid.css`,
          `${options.prefix}css/sharp-thin.css`,
        ]
      : []),
    ...(options.duotoneSharp
      ? [
          `${options.prefix}css/sharp-duotone-light.css`,
          `${options.prefix}css/sharp-duotone-regular.css`,
          `${options.prefix}css/sharp-duotone-solid.css`,
          `${options.prefix}css/sharp-duotone-thin.css`,
        ]
      : []),
  ];
  return {
    fonst,
  };
};

export default { install };
