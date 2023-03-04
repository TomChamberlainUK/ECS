import Entity from '~/core/Entity';
import type Renderer from '~/core/Renderer';
import type { CRenderCircle, CTransform2D } from '~/components';

/**
 * Renders entities as circles.
 * Entities must have CRenderCircle and CTransform2D components.
 * @param entities - An array of entities.
 * @param renderer - The renderer to use.
 */
export default function renderCircle(entities: Entity[], renderer: Renderer) {
  entities.forEach(entity => {
    if (!entity.hasComponents('render-circle', 'transform2d')) return;

    const transform = entity.getComponent('transform2d') as CTransform2D;
    const renderCircle = entity.getComponent('render-circle') as CRenderCircle;

    renderer.renderCircle({
      position: transform.position,
      rotation: transform.rotation,
      scale: transform.scale,
      radius: renderCircle.radius,
      fillColor: renderCircle.fillColor,
      strokeColor: renderCircle.strokeColor
    });
  });
}