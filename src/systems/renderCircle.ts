import Entity from '~/core/Entity';
import type { CRenderCircle, CTransform2D } from '~/components';
import { SystemParams } from '~/types/system';

/**
 * Renders entities as circles.
 * Entities must have CRenderCircle and CTransform2D components.
 * @param entities - An array of entities.
 * @param SystemParams - Extra parameters available to the game's systems.
 */
export default function renderCircle(entities: Entity[], { renderer }: SystemParams) {
  if (!renderer) return;

  entities.forEach(entity => {
    if (!entity.hasComponents('CRenderCircle', 'CTransform2D')) return;

    const transform = entity.getComponent<CTransform2D>('CTransform2D');
    const renderCircle = entity.getComponent<CRenderCircle>('CRenderCircle');

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