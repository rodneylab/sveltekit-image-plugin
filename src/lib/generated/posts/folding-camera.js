import meta from '$lib/assets/blog/folding-camera/folding-camera.jpg?w=672&as=meta:height;src;width';
import srcsetwebp from '$lib/assets/blog/folding-camera/folding-camera.jpg?w=1344;672&format=webp&as=srcset';
import srcsetauto from '$lib/assets/blog/folding-camera/folding-camera.jpg?w=1344;672&format=jpeg&as=srcset';
import ogImage from '$lib/assets/blog/folding-camera/folding-camera-open-graph.jpg';
import ogSquareImage from '$lib/assets/blog/folding-camera/folding-camera-open-graph-square.jpg';
import twitterImage from '$lib/assets/blog/folding-camera/folding-camera-twitter.jpg';

const { height, src, width } = meta;

const data = {
  slug: 'folding-camera',
  alt: 'Photograph of a classic folding camera',
  width,
  height,
  src,
  sources: [
    { srcset: srcsetwebp, type: 'image/webp' },
    { srcset: srcsetauto, type: 'image/jpeg' },
  ],
  dominantColour: '#f8f8f8',
  placeholder:
    'data:image/jpeg;base64,/9j/2wBDAAwREhMUFBUUFBofGhUaHiIcGhohKC4jJB4hMzg/PTouKC5CRFpMPi5XRTc3VmBRVlpgZmRkQklveXFmeFtlaWf/2wBDAQgMDQwNDw8PDxFgEBIaVmBaYFpgY2NjY2BjYGBiY2NjY2NjY2NjY2NjY2JjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAANrfJf/EAB0QAAEEAgMAAAAAAAAAAAAAAAIAAQMhBAUREnH/2gAIAQEAAT8AiHNHYzkV4psPW6Hxlyv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==',
  ogImage,
  ogSquareImage,
  twitterImage,
};

export { data as default };
