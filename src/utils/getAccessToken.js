export const getAccessToken = () => {
	const params = new URLSearchParams(window.location.hash.replace('#', '?'))
	return params.get('access_token')
}
