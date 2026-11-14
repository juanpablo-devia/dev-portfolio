import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PERFIL, PROYECTOS } from './data/portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  async function renderizar(): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('crea la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra el nombre del estudiante en el título principal', async () => {
    const html = await renderizar();
    expect(html.querySelector('h1')?.textContent).toContain(PERFIL.nombre);
  });

  it('muestra los cinco proyectos del catálogo', async () => {
    const html = await renderizar();
    expect(html.querySelectorAll('[data-testid="proyecto"]').length).toBe(5);
  });

  it('cada proyecto tiene enlace al repositorio y a la app desplegada', async () => {
    const html = await renderizar();
    const tarjetas = html.querySelectorAll('[data-testid="proyecto"]');

    tarjetas.forEach((tarjeta, i) => {
      const repo = tarjeta.querySelector<HTMLAnchorElement>('[data-testid="enlace-repo"]');
      const demo = tarjeta.querySelector<HTMLAnchorElement>('[data-testid="enlace-demo"]');
      expect(repo?.getAttribute('href')).toBe(PROYECTOS[i].repo);
      expect(demo?.getAttribute('href')).toBe(PROYECTOS[i].demo);
    });
  });

  it('muestra los lenguajes y las tecnologías del perfil', async () => {
    const html = await renderizar();
    expect(html.querySelectorAll('[data-testid="lenguajes"] li').length).toBe(PERFIL.lenguajes.length);
    expect(html.querySelectorAll('[data-testid="tecnologias"] li').length).toBe(PERFIL.tecnologias.length);
  });
});
