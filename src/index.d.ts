import { enrichments } from './gameEvents/constants'
import {EntitynumEnrichment,UseridEnrichment} from './gameEvents/enrichments'
export {GameEventDescription,GameEventUnserializer} from './gameEvents/gameEvent'
export {enrichments} from './gameEvents/constants'
export {EntitynumEnrichment,UseridEnrichment} from './gameEvents/enrichments'


type EnrichmentKey = keyof typeof enrichments

type EnrichmentEvent = {
    [key: string]: UseridEnrichment | EntitynumEnrichment
}
type EnrichmentEvents = Map<EnrichmentKey, EnrichmentEvent>;