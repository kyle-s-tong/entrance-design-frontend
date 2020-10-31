export default function getImageRootUrl() {
  const { NODE_ENV, VUE_APP_API_HOST } = process.env;

  if (NODE_ENV === 'production') {
    return '';
  } else {
    return VUE_APP_API_HOST;
  }
}
