export default function orderByProps(obj, props) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const max = props.length;
  result.sort((a, b) => {
    let aOrder = props.indexOf(a.key);
    if (aOrder < 0) {
      aOrder = max;
    }
    let bOrder = props.indexOf(b.key);
    if (bOrder < 0) {
      bOrder = max;
    }
    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  return result;
}
