import { PERFIL, PROYECTOS } from './portfolio.data';

describe('Datos del portafolio', () => {
  it('tiene exactamente cinco proyectos', () => {
    expect(PROYECTOS.length).toBe(5);
  });

  it('el primer proyecto es el propio portafolio', () => {
    expect(PROYECTOS[0].repo).toBe('https://github.com/juanpablo-devia/dev-portfolio');
  });

  it('todos los repositorios y apps apuntan a la cuenta del estudiante', () => {
    for (const proyecto of PROYECTOS) {
      expect(proyecto.repo.startsWith('https://github.com/juanpablo-devia/')).toBe(true);
      expect(proyecto.demo.startsWith('https://juanpablo-devia.github.io/')).toBe(true);
    }
  });

  it('cada proyecto tiene descripción, tecnologías y características', () => {
    for (const proyecto of PROYECTOS) {
      expect(proyecto.descripcion.length).toBeGreaterThan(0);
      expect(proyecto.tecnologias.length).toBeGreaterThan(0);
      expect(proyecto.caracteristicas.length).toBeGreaterThan(0);
    }
  });

  it('el perfil tiene lenguajes, tecnologías y al menos un contacto', () => {
    expect(PERFIL.lenguajes.length).toBeGreaterThan(0);
    expect(PERFIL.tecnologias.length).toBeGreaterThan(0);
    expect(PERFIL.contactos.length).toBeGreaterThan(0);
  });
});
