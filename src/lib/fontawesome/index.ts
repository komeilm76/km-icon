type IWeight = 'solid' | 'regular' | 'light' | 'thin' | 'semibold' | 'default';
type IFamily =
  | 'classic'
  | 'duotone'
  | 'sharp'
  | 'sharp-duotone'
  | 'chisel'
  | 'etch'
  | 'jelly'
  | 'jelly-duo'
  | 'jelly-fill'
  | 'notdog'
  | 'notdog-duo'
  | 'slab'
  | 'slab-press'
  | 'thumbprint'
  | 'utility'
  | 'utility-duo'
  | 'utility-fill'
  | 'whiteboard'
  | 'default';
type ISize = '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | 'default';
type IAnimation =
  | 'beat'
  | 'beat-fade'
  | 'fa-bounce'
  | 'fa-fade'
  | 'fa-flip'
  | 'shake'
  | 'spin'
  | 'spin-reverse'
  | 'spin-pulse'
  | 'default';
type IFlip = 'horizontal' | 'vertical' | 'both' | 'default';
type IRotate = '90' | '180' | '270' | number | 'default';

type IInstallOptions = {
  weight: Partial<Omit<Record<IWeight, boolean>, 'default' | 'semibold'>>;
  family: Partial<
    Omit<
      Record<IFamily, boolean>,
      | 'default'
      | 'jelly-duo'
      | 'jelly-fill'
      | 'notdog-duo'
      | 'slab-press'
      | 'utility-duo'
      | 'utility-fill'
    >
  >;
  brands: boolean;
};

export const use = async (entryOptions: Partial<IInstallOptions> = {}) => {
  const options: IInstallOptions = {
    family: {
      classic: true,
    },
    weight: {
      solid: true,
    },
    brands: true,
    ...entryOptions,
  };
  const weightList: string[] = [];
  const familyList: string[] = [];
  const brandList: string[] = [];
  weightList.push('fontawesome.css');
  // push weights
  if (options.weight.solid == true) {
    weightList.push('solid.css');
  }
  if (options.weight.regular) {
    weightList.push('regular.css');
  }
  if (options.weight.light) {
    weightList.push('light.css');
  }
  if (options.weight.thin) {
    weightList.push('thin.css');
  }
  // push familys
  if (options.family.classic == true) {
    // classic is not was a seprated import
    // familyList.push('classic.css');
  }
  if (options.family.duotone == true) {
    familyList.push(...['duotone-regular.css', 'duotone-light.css', 'duotone-thin.css']);
  }
  if (options.family.sharp == true) {
    familyList.push(
      ...['sharp-solid.css', 'sharp-regular.css', 'sharp-light.css', 'sharp-thin.css']
    );
  }
  if (options.family['sharp-duotone'] == true) {
    familyList.push(
      ...[
        'sharp-duotone-solid.css',
        'sharp-duotone-regular.css',
        'sharp-duotone-light.css',
        'sharp-duotone-thin.css',
      ]
    );
  }
  if (options.family.chisel == true) {
    familyList.push(...['chisel-regular.css']);
  }
  if (options.family.etch == true) {
    familyList.push(...['etch-solid.css']);
  }
  if (options.family.jelly == true) {
    familyList.push(...['jelly-regular.css', 'jelly-duo-regular.css', 'jelly-fill-regular.css']);
  }
  if (options.family.notdog == true) {
    familyList.push(...['notdog-solid.css', 'notdog-duo-solid.css']);
  }
  if (options.family.slab == true) {
    familyList.push(...['slab-regular.css', 'slab-press-regular.css']);
  }
  if (options.family.thumbprint == true) {
    familyList.push(...['thumbprint-light.css']);
  }
  if (options.family.utility == true) {
    familyList.push(
      ...['utility-semibold.css', 'utility-duo-semibold.css', 'utility-fill-semibold.css']
    );
  }
  if (options.family.whiteboard == true) {
    familyList.push(...['whiteboard-semibold.css']);
  }

  if (options.brands == true) {
    brandList.push('brands.css');
  }

  return {
    weightList,
    familyList,
    brandList,
    importCss: (basePath: string = 'km-icon/assets/fontawesome/v7/pro/css/') => {
      return new Promise<{ errors: any[]; success: any[] }>((rs, rj) => {
        const errors: any[] = [];
        const success: any[] = [];
        const readyForImportItems = [...weightList, ...familyList, ...brandList].map((item) => {
          return () =>
            import(`${basePath}${item}`)
              .then((res) => {
                success.push(res);
              })
              .catch((error) => {
                errors.push(error);
              });
        });
        Promise.all(readyForImportItems).then(() => {
          rs({ errors, success });
        });
      });
    },
  };
};
