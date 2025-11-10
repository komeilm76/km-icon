export namespace Fontawesome {
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
  };

  export const installFontAwesome = async (entryOptions: Partial<IInstallOptions>) => {
    const options: IInstallOptions = {
      family: {
        classic: true,
      },
      weight: {
        solid: true,
      },
      ...entryOptions,
    };
    const weightList: string[] = [];
    const familyList: string[] = [];
    weightList.push('fontawesome.css');
    // push weights
    if (options.weight.solid == true) {
      weightList.push('solid.css');
    } else if (options.weight.regular) {
      weightList.push('regular.css');
    } else if (options.weight.light) {
      weightList.push('light.css');
    } else if (options.weight.thin) {
      weightList.push('thin.css');
    }
    // push familys
    if (options.family.classic == true) {
      familyList.push('classic.css');
    } else if (options.family.duotone == true) {
      familyList.push(...['duotone-regular.css', 'duotone-light.css', 'duotone-thin.css']);
    } else if (options.family.sharp == true) {
      familyList.push(
        ...['sharp-solid.css', 'sharp-regular.css', 'sharp-light.css', 'sharp-thin.css']
      );
    } else if (options.family['sharp-duotone'] == true) {
      familyList.push(
        ...[
          'sharp-duotone-solid.css',
          'sharp-duotone-regular.css',
          'sharp-duotone-light.css',
          'sharp-duotone-thin.css',
        ]
      );
    } else if (options.family.chisel == true) {
      familyList.push(...['chisel-regular.css']);
    } else if (options.family.etch == true) {
      familyList.push(...['etch-solid.css']);
    } else if (options.family.jelly == true) {
      familyList.push(...['jelly-regular.css', 'jelly-duo-regular.css', 'jelly-fill-regular.css']);
    } else if (options.family.notdog == true) {
      familyList.push(...['notdog-solid.css', 'notdog-duo-solid.css']);
    } else if (options.family.slab == true) {
      familyList.push(...['slab-regular.css', 'slab-press-regular.css']);
    } else if (options.family.thumbprint == true) {
      familyList.push(...['thumbprint-light.css']);
    } else if (options.family.utility == true) {
      familyList.push(
        ...['utility-semibold.css', 'utility-duo-semibold.css', 'utility-fill-semibold.css']
      );
    } else if (options.family.whiteboard == true) {
      familyList.push(...['whiteboard-semibold.css']);
    }

    [...familyList, weightList].forEach(async (item) => {
      await import(`km-icon/assets/fontawesome/v7/pro/css/${item}`);
    });
  };
}
