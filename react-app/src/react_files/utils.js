export function getImageUrl(person,size='s'){
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    )
}
export function getImageUrls(imageId,size='s'){
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    )
}

export function getImageUrlByPerson(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }