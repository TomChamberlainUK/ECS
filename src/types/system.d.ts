import Entity from '~/core/Entity';
import Renderer from '~/core/Renderer';
import { Input } from '~/input';

/**
 * Parameters available to each system.
 * Links entities to core elements of the game, such as a renderer or input device.
 */
export type SystemParams = {
  /** Generates visuals for the game. */
  renderer?: Renderer,
  /** Handles user interactivity in the game. */
  input?: Input
}

/**
 * Type representing a system for the game.
 * Systems manipulate entities via their components.
 */
export type System = (entities: Entity[], params: SystemParams) => void;