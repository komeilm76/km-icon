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

const getListOfImportCssFileNames = async (entryOptions: Partial<IInstallOptions> = {}) => {
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
  };
};

type IOptions = {
  name: string;
  family: IFamily;
  weight: IWeight;
  size: ISize;
  animation: IAnimation;
  flip: IFlip;
  rotate: IRotate;
  brands: boolean;
};
const makeClassNameList = (
  entryOptions: Partial<Omit<IOptions, 'name'>> & { name: IOptions['name'] }
) => {
  const options: IOptions = {
    animation: 'default',
    family: 'default',
    flip: 'default',
    rotate: 'default',
    size: 'default',
    weight: 'default',
    brands: false,
    ...entryOptions,
  };
  const outputClasses = [];
  // name
  outputClasses.push(`fa-${entryOptions.name}`);
  // family
  if (options.family == 'default' || options.family == 'classic') {
    outputClasses.push('');
  } else {
    outputClasses.push(`fa-${options.family}`);
  }
  // weight
  if (options.weight == 'default' || options.weight == 'solid') {
    outputClasses.push(`fa-solid`);
  } else {
    outputClasses.push(`fa-${options.weight}`);
  }
  // animation
  if (options.animation == 'default') {
    outputClasses.push(``);
  } else if (options.animation == 'spin-reverse') {
    outputClasses.push(`fa-spin-reverse`);
    outputClasses.push(`fa-spin`);
  } else if (options.animation == 'spin') {
    outputClasses.push(`fa-spin`);
  } else {
    outputClasses.push(`fa-${options.animation}`);
  }
  // rotate
  if (options.rotate == 'default') {
    outputClasses.push(``);
  } else {
    outputClasses.push(`fa-rotate-${options.rotate}`);
  }
  // flip
  if (options.flip == 'default') {
    outputClasses.push(``);
  } else {
    outputClasses.push(`fa-flip-${options.flip}`);
  }
  // size
  if (options.size == 'default') {
    outputClasses.push(``);
  } else {
    outputClasses.push(`fa-${options.size}`);
  }
  // brands
  if (options.brands) {
    outputClasses.push('fa-brands');
  }
  return outputClasses;
};

type IMakeConfigEntry = {
  weight: Record<'solid' | 'regular' | 'light' | 'thin', boolean>;
  familyGroup: Record<
    | 'classic'
    | 'duotone'
    | 'sharp'
    | 'sharp-duotone'
    | 'chisel'
    | 'etch'
    | 'jelly'
    | 'notdog'
    | 'slab'
    | 'thumbprint'
    | 'utility'
    | 'whiteboard',
    boolean
  >;
  brands: boolean;
};

const makeConfig = (entryConfig: Partial<IMakeConfigEntry>) => {
  const config: IMakeConfigEntry = {
    weight: {
      solid: true,
      regular: false,
      light: false,
      thin: false,
    },
    familyGroup: {
      classic: true,
      duotone: false,
      sharp: false,
      'sharp-duotone': false,
      chisel: false,
      etch: false,
      jelly: false,
      notdog: false,
      slab: false,
      thumbprint: false,
      utility: false,
      whiteboard: false,
    },
    brands: false,
    ...entryConfig,
  };

  const families = Object.keys(config.familyGroup)
    .filter((i) => {
      return config.familyGroup[i as keyof IMakeConfigEntry['familyGroup']] == true;
    })
    .map((item) => {
      return `family-${item}`;
    }) as `family-${keyof IMakeConfigEntry['familyGroup']}`[];
  const weights = Object.keys(config.weight)
    .filter((i) => {
      return config.weight[i as keyof IMakeConfigEntry['weight']] == true;
    })
    .map((item) => {
      return `weight-${item}`;
    }) as `weight-${keyof IMakeConfigEntry['weight']}`[];
  const brands = config.brands == true ? (['brands'] as 'brands'[]) : [];
  return {
    names: [...families, ...weights, ...brands],
  };
};

export default { makeClassNameList, makeConfig };
