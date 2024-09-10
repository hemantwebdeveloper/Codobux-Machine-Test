// add ... in last of string -->
export const truncateString = (str, num=25) => {
    let firstLine = str?.split('\n')[0];
  
    if (firstLine?.length <= num) {
      return firstLine;
    }
  
    return firstLine?.slice(0, num) + '...';
  };