import { enrichments } from './gameEvents/constants'
import {EntitynumEnrichment,UserIdEnrichment} from './gameEvents/enrichments'
export {GameEventDescription,GameEventUnserializer} from './gameEvents/gameEvent'
export {enrichments} from './gameEvents/constants'
export {EntitynumEnrichment,UserIdEnrichment} from './gameEvents/enrichments'


type EnrichmentKey = keyof typeof enrichments

type EnrichmentEvent = {
    [key: string]: UserIdEnrichment | EntitynumEnrichment
}
type EnrichmentEvents = Map<EnrichmentKey, EnrichmentEvent>;