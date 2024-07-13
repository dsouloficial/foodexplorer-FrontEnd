/**
 * Decodifica o conteudo (payload) do token jwt.
 * @param {String} token
 * @returns tokenPayload | null
 */
function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[ 1 ];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    const payload = JSON.parse(jsonPayload);
    const now = Math.floor(Date.now() / 1000);

    if (payload) {
      payload.issuedAt = new Date(payload.iat * 1000);
      payload.expiration = new Date(payload.exp * 1000);
      payload.isExpired = now > payload.exp;
    }

    return payload;

  } catch (error) {
    return null;
  }
}

export { decodeJwt };
