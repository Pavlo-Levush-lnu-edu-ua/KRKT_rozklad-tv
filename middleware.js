export const config = {
  matcher: ['/rozklad-admin.html', '/rozklad-admin', 'k5v-rozklad-admin.html', 'k5v-rozklad-admin'],
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  const validUser = process.env.ADMIN_USER || 'admin';
  const validPass = process.env.ADMIN_PASS;

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [user, pass] = atob(encoded).split(':');
      if (user === validUser && pass === validPass) {
        return;
      }
    }
  }

  return new Response('Потрібна автентифікація', {
    status: 401,
    headers: {'WWW-Authenticate': 'Basic realm="Rozklad Admin"'},
  });
}
