
export default () => {
  let extensionTime = {
    type: 'lang',
    filter: (text) => {
      let regex = /\[\[ts\s(\d+):(\d+):(\d+)\]\]/g
      let modified = text;
      let result
      while(result = regex.exec(text)) { // eslint-disable-line
        let time = parseInt(result[1]) * 3600 +
          parseInt(result[2]) * 60 +
          parseInt(result[3]);

        modified = modified.replace(result[0], `<VideoMarkdownTime time='${time}' />`)
      }
      return modified
    }
  }

  return [extensionTime]
}
