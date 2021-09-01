import { IMAGE_DIR, dominantColour, lowResolutionPlaceholder } from '$lib/utilities/image';
import path from 'path';
const __dirname = path.resolve();

export const post = async (request) => {
  try {
    const { images } = request.body;

		const dominantColourPromises = images.map((element) => {
      const source = path.join(__dirname, IMAGE_DIR, element);
      return dominantColour({ source });
    });

    const placeholderPromises = images.map((element) => {
      const source = path.join(__dirname, IMAGE_DIR, element);
      return lowResolutionPlaceholder({ source });
    });

		const dominantColours = await Promise.all(dominantColourPromises);
    const placeholders = await Promise.all(placeholderPromises);

    return {
      body: JSON.stringify({ placeholders, dominantColours })
    };
  } catch (err) {
    console.log('Error: ', err);
    return {
      status: 500,
      error: 'Error retreiving data'
    };
  }
};
