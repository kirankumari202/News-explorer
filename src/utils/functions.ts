// This file will be used for shared functions that do not deal with state
// Storing functions here is intended to reduce prop drilling and clutter


export function convertDate(oldDate: string): string {
  const newDate = new Date(oldDate).toString().split(' ').slice(1, 4);
  switch (newDate.shift()) {
    case 'Jan':
      newDate.unshift('January');
      break;
    case 'Feb':
      newDate.unshift('February');
      break;
    case 'Mar':
      newDate.unshift('March');
      break;
    case 'Apr':
      newDate.unshift('April');
      break;
    case 'May':
      newDate.unshift('May');
      break;
    case 'Jun':
      newDate.unshift('June');
      break;
    case 'Jul':
      newDate.unshift('July');
      break;
    case 'Aug':
      newDate.unshift('August');
      break;
    case 'Sep':
      newDate.unshift('September');
      break;
    case 'Oct':
      newDate.unshift('October');
      break;
    case 'Nov':
      newDate.unshift('November');
      break;
    case 'Dec':
      newDate.unshift('December');
      break;
    default:
      console.log('oops');
  }
  return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`;
}
