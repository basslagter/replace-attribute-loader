import { getOptions } from 'loader-utils';

export default function ReplaceAttributeLoader(source: string) {
  // @ts-ignore
  const { attribute } = getOptions(this);
  const isString = (typeof attribute === 'string');
  const isArray = Array.isArray(attribute);
  const attributes = (isString)
    ? [attribute]
    : (!isArray)
      ? Object.keys(attribute)
      : attribute;

  attributes.forEach(function (attr: string) {
    const value = (isArray || isString) ? '' : attribute[attr];
    const regex = RegExp(`${attr}=[{|"].*[}|"][ |?/>]`, 'gi');

    let result;

    while ((result = regex.exec(source))) {
      source = source.replace(result[0].slice(0, -1), value);
    }
  });


  return source;
}