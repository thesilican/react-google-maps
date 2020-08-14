import React, { useState } from "react";
import { HeatMap, Map } from "../../src";

const weightedMap = [
  { lat: 37.782, lng: -122.447, weight: 0.5 },
  { lat: 37.782, lng: -122.445 },
  { lat: 37.782, lng: -122.443, weight: 2 },
  { lat: 37.782, lng: -122.441, weight: 3 },
  { lat: 37.782, lng: -122.439, weight: 2 },
  { lat: 37.782, lng: -122.437 },
  { lat: 37.782, lng: -122.435, weight: 0.5 },
  { lat: 37.785, lng: -122.447, weight: 3 },
  { lat: 37.785, lng: -122.445, weight: 2 },
  { lat: 37.785, lng: -122.443 },
  { lat: 37.785, lng: -122.441, weight: 0.5 },
  { lat: 37.785, lng: -122.439 },
  { lat: 37.785, lng: -122.437, weight: 2 },
  { lat: 37.785, lng: -122.435, weight: 3 },
  { lat: 37.785, lng: -122.4, weight: 100 },
];

const center = { lat: 37.785, lng: -122.447 };

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)",
];

export default function HeatMapTest() {
  const [locations, setLocations] = useState(weightedMap);

  return (
    <div className="map">
      <Map center={center} zoom={14}>
        <HeatMap
          data={locations}
          // dissipating={false}
          radius={20}
          // gradient={gradient}
          maxIntensity={3}
          opacity={0.6}
        />
      </Map>
    </div>
  );
}

const points = [
  { lat: 37.782551, lng: -122.445368 },
  { lat: 37.782745, lng: -122.444586 },
  { lat: 37.782842, lng: -122.443688 },
  { lat: 37.782919, lng: -122.442815 },
  { lat: 37.782992, lng: -122.442112 },
  { lat: 37.7831, lng: -122.441461 },
  { lat: 37.783206, lng: -122.440829 },
  { lat: 37.783273, lng: -122.440324 },
  { lat: 37.783316, lng: -122.440023 },
  { lat: 37.783357, lng: -122.439794 },
  { lat: 37.783371, lng: -122.439687 },
  { lat: 37.783368, lng: -122.439666 },
  { lat: 37.783383, lng: -122.439594 },
  { lat: 37.783508, lng: -122.439525 },
  { lat: 37.783842, lng: -122.439591 },
  { lat: 37.784147, lng: -122.439668 },
  { lat: 37.784206, lng: -122.439686 },
  { lat: 37.784386, lng: -122.43979 },
  { lat: 37.784701, lng: -122.439902 },
  { lat: 37.784965, lng: -122.439938 },
  { lat: 37.78501, lng: -122.439947 },
  { lat: 37.78536, lng: -122.439952 },
  { lat: 37.785715, lng: -122.44003 },
  { lat: 37.786117, lng: -122.440119 },
  { lat: 37.786564, lng: -122.440209 },
  { lat: 37.786905, lng: -122.44027 },
  { lat: 37.786956, lng: -122.440279 },
  { lat: 37.800224, lng: -122.43352 },
  { lat: 37.800155, lng: -122.434101 },
  { lat: 37.80016, lng: -122.43443 },
  { lat: 37.800378, lng: -122.434527 },
  { lat: 37.800738, lng: -122.434598 },
  { lat: 37.800938, lng: -122.43465 },
  { lat: 37.801024, lng: -122.434889 },
  { lat: 37.800955, lng: -122.435392 },
  { lat: 37.800886, lng: -122.435959 },
  { lat: 37.800811, lng: -122.436275 },
  { lat: 37.800788, lng: -122.436299 },
  { lat: 37.800719, lng: -122.436302 },
  { lat: 37.800702, lng: -122.436298 },
  { lat: 37.800661, lng: -122.436273 },
  { lat: 37.800395, lng: -122.436172 },
  { lat: 37.800228, lng: -122.436116 },
  { lat: 37.800169, lng: -122.43613 },
  { lat: 37.800066, lng: -122.436167 },
  { lat: 37.784345, lng: -122.422922 },
  { lat: 37.784389, lng: -122.422926 },
  { lat: 37.784437, lng: -122.422924 },
  { lat: 37.784746, lng: -122.422818 },
  { lat: 37.785436, lng: -122.422959 },
  { lat: 37.78612, lng: -122.423112 },
  { lat: 37.786433, lng: -122.423029 },
  { lat: 37.786631, lng: -122.421213 },
  { lat: 37.78666, lng: -122.421033 },
  { lat: 37.786801, lng: -122.420141 },
  { lat: 37.786823, lng: -122.420034 },
  { lat: 37.786831, lng: -122.419916 },
  { lat: 37.787034, lng: -122.418208 },
  { lat: 37.787056, lng: -122.418034 },
  { lat: 37.787169, lng: -122.417145 },
  { lat: 37.787217, lng: -122.416715 },
  { lat: 37.786144, lng: -122.416403 },
  { lat: 37.785292, lng: -122.416257 },
  { lat: 37.780666, lng: -122.390374 },
  { lat: 37.780501, lng: -122.391281 },
  { lat: 37.780148, lng: -122.392052 },
  { lat: 37.780173, lng: -122.391148 },
  { lat: 37.780693, lng: -122.390592 },
  { lat: 37.781261, lng: -122.391142 },
  { lat: 37.781808, lng: -122.39173 },
  { lat: 37.78234, lng: -122.392341 },
  { lat: 37.782812, lng: -122.393022 },
  { lat: 37.7833, lng: -122.393672 },
  { lat: 37.783809, lng: -122.394275 },
  { lat: 37.784246, lng: -122.394979 },
  { lat: 37.784791, lng: -122.395958 },
  { lat: 37.785675, lng: -122.396746 },
  { lat: 37.786262, lng: -122.39578 },
  { lat: 37.786776, lng: -122.395093 },
  { lat: 37.787282, lng: -122.394426 },
  { lat: 37.787783, lng: -122.393767 },
  { lat: 37.788343, lng: -122.393184 },
  { lat: 37.788895, lng: -122.392506 },
  { lat: 37.789371, lng: -122.391701 },
  { lat: 37.789722, lng: -122.390952 },
  { lat: 37.790315, lng: -122.390305 },
  { lat: 37.790738, lng: -122.389616 },
  { lat: 37.779448, lng: -122.438702 },
  { lat: 37.779023, lng: -122.438585 },
  { lat: 37.778542, lng: -122.438492 },
  { lat: 37.7781, lng: -122.438411 },
  { lat: 37.777986, lng: -122.438376 },
  { lat: 37.77768, lng: -122.438313 },
  { lat: 37.777316, lng: -122.438273 },
  { lat: 37.777135, lng: -122.438254 },
  { lat: 37.776987, lng: -122.438303 },
  { lat: 37.776946, lng: -122.438404 },
  { lat: 37.776944, lng: -122.438467 },
  { lat: 37.776892, lng: -122.438459 },
  { lat: 37.776842, lng: -122.438442 },
  { lat: 37.776822, lng: -122.438391 },
  { lat: 37.776814, lng: -122.438412 },
  { lat: 37.776787, lng: -122.438628 },
  { lat: 37.776729, lng: -122.43865 },
  { lat: 37.776759, lng: -122.438677 },
  { lat: 37.776772, lng: -122.438498 },
  { lat: 37.776787, lng: -122.438389 },
  { lat: 37.776848, lng: -122.438283 },
  { lat: 37.77687, lng: -122.438239 },
  { lat: 37.777015, lng: -122.438198 },
  { lat: 37.777333, lng: -122.438256 },
  { lat: 37.777595, lng: -122.438308 },
  { lat: 37.777797, lng: -122.438344 },
  { lat: 37.77816, lng: -122.438442 },
  { lat: 37.778414, lng: -122.438508 },
  { lat: 37.778445, lng: -122.438516 },
  { lat: 37.778503, lng: -122.438529 },
  { lat: 37.778607, lng: -122.438549 },
  { lat: 37.77867, lng: -122.438644 },
  { lat: 37.778847, lng: -122.438706 },
  { lat: 37.77924, lng: -122.438744 },
  { lat: 37.779738, lng: -122.438822 },
  { lat: 37.780201, lng: -122.438882 },
  { lat: 37.7804, lng: -122.438905 },
  { lat: 37.780501, lng: -122.438921 },
  { lat: 37.780892, lng: -122.438986 },
  { lat: 37.781446, lng: -122.439087 },
  { lat: 37.781985, lng: -122.439199 },
  { lat: 37.782239, lng: -122.439249 },
  { lat: 37.782286, lng: -122.439266 },
  { lat: 37.797847, lng: -122.429388 },
  { lat: 37.797874, lng: -122.42918 },
  { lat: 37.797885, lng: -122.429069 },
  { lat: 37.797887, lng: -122.42905 },
  { lat: 37.797933, lng: -122.428954 },
  { lat: 37.798242, lng: -122.42899 },
  { lat: 37.798617, lng: -122.429075 },
  { lat: 37.798719, lng: -122.429092 },
  { lat: 37.798944, lng: -122.429145 },
  { lat: 37.79932, lng: -122.429251 },
  { lat: 37.79959, lng: -122.429309 },
  { lat: 37.799677, lng: -122.429324 },
  { lat: 37.799966, lng: -122.42936 },
  { lat: 37.800288, lng: -122.42943 },
  { lat: 37.800443, lng: -122.429461 },
  { lat: 37.800465, lng: -122.429474 },
  { lat: 37.800644, lng: -122.42954 },
  { lat: 37.800948, lng: -122.42962 },
  { lat: 37.801242, lng: -122.429685 },
  { lat: 37.801375, lng: -122.429702 },
  { lat: 37.8014, lng: -122.429703 },
  { lat: 37.801453, lng: -122.429707 },
  { lat: 37.801473, lng: -122.429709 },
  { lat: 37.801532, lng: -122.429707 },
  { lat: 37.801852, lng: -122.429729 },
  { lat: 37.802173, lng: -122.429789 },
  { lat: 37.802459, lng: -122.429847 },
  { lat: 37.802554, lng: -122.429825 },
  { lat: 37.802647, lng: -122.429549 },
  { lat: 37.802693, lng: -122.429179 },
  { lat: 37.802729, lng: -122.428751 },
  { lat: 37.766104, lng: -122.409291 },
  { lat: 37.766103, lng: -122.409268 },
  { lat: 37.766138, lng: -122.409229 },
  { lat: 37.766183, lng: -122.409231 },
  { lat: 37.766153, lng: -122.409276 },
  { lat: 37.766005, lng: -122.409365 },
  { lat: 37.765897, lng: -122.40957 },
  { lat: 37.765767, lng: -122.409739 },
  { lat: 37.765693, lng: -122.410389 },
  { lat: 37.765615, lng: -122.411201 },
  { lat: 37.765533, lng: -122.412121 },
  { lat: 37.765467, lng: -122.412939 },
  { lat: 37.765444, lng: -122.414821 },
  { lat: 37.765444, lng: -122.414964 },
  { lat: 37.765318, lng: -122.415424 },
  { lat: 37.763961, lng: -122.415296 },
  { lat: 37.763115, lng: -122.415196 },
  { lat: 37.762967, lng: -122.415183 },
  { lat: 37.762278, lng: -122.415127 },
  { lat: 37.761675, lng: -122.415055 },
  { lat: 37.760932, lng: -122.414988 },
  { lat: 37.759337, lng: -122.414862 },
  { lat: 37.773187, lng: -122.421922 },
  { lat: 37.773043, lng: -122.422118 },
  { lat: 37.773007, lng: -122.422165 },
  { lat: 37.772979, lng: -122.422219 },
  { lat: 37.772865, lng: -122.422394 },
  { lat: 37.772779, lng: -122.422503 },
  { lat: 37.772676, lng: -122.422701 },
  { lat: 37.772606, lng: -122.422806 },
  { lat: 37.772566, lng: -122.42284 },
  { lat: 37.772508, lng: -122.422852 },
  { lat: 37.772387, lng: -122.423011 },
  { lat: 37.772099, lng: -122.423328 },
  { lat: 37.771704, lng: -122.423783 },
  { lat: 37.771481, lng: -122.424081 },
  { lat: 37.7714, lng: -122.424179 },
  { lat: 37.771352, lng: -122.42422 },
  { lat: 37.771248, lng: -122.424327 },
  { lat: 37.770904, lng: -122.424781 },
  { lat: 37.77052, lng: -122.425283 },
  { lat: 37.770337, lng: -122.425553 },
  { lat: 37.770128, lng: -122.425832 },
  { lat: 37.769756, lng: -122.426331 },
  { lat: 37.7693, lng: -122.426902 },
  { lat: 37.769132, lng: -122.427065 },
  { lat: 37.769092, lng: -122.427103 },
  { lat: 37.768979, lng: -122.427172 },
  { lat: 37.768595, lng: -122.427634 },
  { lat: 37.768372, lng: -122.427913 },
  { lat: 37.768337, lng: -122.427961 },
  { lat: 37.768244, lng: -122.428138 },
  { lat: 37.767942, lng: -122.428581 },
  { lat: 37.767482, lng: -122.429094 },
  { lat: 37.767031, lng: -122.429606 },
  { lat: 37.766732, lng: -122.429986 },
  { lat: 37.76668, lng: -122.430058 },
  { lat: 37.766633, lng: -122.430109 },
  { lat: 37.76658, lng: -122.430211 },
  { lat: 37.766367, lng: -122.430594 },
  { lat: 37.76591, lng: -122.431137 },
  { lat: 37.765353, lng: -122.431806 },
  { lat: 37.764962, lng: -122.432298 },
  { lat: 37.764868, lng: -122.432486 },
  { lat: 37.764518, lng: -122.432913 },
  { lat: 37.763435, lng: -122.434173 },
  { lat: 37.762847, lng: -122.434953 },
  { lat: 37.762291, lng: -122.435935 },
  { lat: 37.762224, lng: -122.436074 },
  { lat: 37.761957, lng: -122.436892 },
  { lat: 37.761652, lng: -122.438886 },
  { lat: 37.761284, lng: -122.439955 },
  { lat: 37.76121, lng: -122.440068 },
  { lat: 37.761064, lng: -122.44072 },
  { lat: 37.76104, lng: -122.441411 },
  { lat: 37.761048, lng: -122.442324 },
  { lat: 37.760851, lng: -122.443118 },
  { lat: 37.759977, lng: -122.444591 },
  { lat: 37.759913, lng: -122.444698 },
  { lat: 37.759623, lng: -122.445065 },
  { lat: 37.758902, lng: -122.445158 },
  { lat: 37.758428, lng: -122.44457 },
  { lat: 37.757687, lng: -122.44334 },
  { lat: 37.757583, lng: -122.44324 },
  { lat: 37.757019, lng: -122.442787 },
  { lat: 37.756603, lng: -122.442322 },
  { lat: 37.75638, lng: -122.441602 },
  { lat: 37.75579, lng: -122.441382 },
  { lat: 37.754493, lng: -122.442133 },
  { lat: 37.754361, lng: -122.442206 },
  { lat: 37.753719, lng: -122.44265 },
  { lat: 37.753096, lng: -122.442915 },
  { lat: 37.751617, lng: -122.443211 },
  { lat: 37.751496, lng: -122.443246 },
  { lat: 37.750733, lng: -122.443428 },
  { lat: 37.750126, lng: -122.443536 },
  { lat: 37.750103, lng: -122.443784 },
  { lat: 37.75039, lng: -122.44401 },
  { lat: 37.750448, lng: -122.444013 },
  { lat: 37.750536, lng: -122.44404 },
  { lat: 37.750493, lng: -122.444141 },
  { lat: 37.790859, lng: -122.402808 },
  { lat: 37.790864, lng: -122.402768 },
  { lat: 37.790995, lng: -122.402539 },
  { lat: 37.791148, lng: -122.402172 },
  { lat: 37.791385, lng: -122.401312 },
  { lat: 37.791405, lng: -122.400776 },
  { lat: 37.791288, lng: -122.400528 },
  { lat: 37.791113, lng: -122.400441 },
  { lat: 37.791027, lng: -122.400395 },
  { lat: 37.791094, lng: -122.400311 },
  { lat: 37.791211, lng: -122.400183 },
  { lat: 37.79106, lng: -122.399334 },
  { lat: 37.790538, lng: -122.398718 },
  { lat: 37.790095, lng: -122.398086 },
  { lat: 37.789644, lng: -122.39736 },
  { lat: 37.789254, lng: -122.396844 },
  { lat: 37.788855, lng: -122.396397 },
  { lat: 37.788483, lng: -122.395963 },
  { lat: 37.788015, lng: -122.395365 },
  { lat: 37.787558, lng: -122.394735 },
  { lat: 37.787472, lng: -122.394323 },
  { lat: 37.78763, lng: -122.394025 },
  { lat: 37.787767, lng: -122.393987 },
  { lat: 37.787486, lng: -122.394452 },
  { lat: 37.786977, lng: -122.395043 },
  { lat: 37.786583, lng: -122.395552 },
  { lat: 37.78654, lng: -122.39561 },
  { lat: 37.786516, lng: -122.395659 },
  { lat: 37.786378, lng: -122.395707 },
  { lat: 37.786044, lng: -122.395362 },
  { lat: 37.785598, lng: -122.394715 },
  { lat: 37.785321, lng: -122.394361 },
  { lat: 37.785207, lng: -122.394236 },
  { lat: 37.785751, lng: -122.394062 },
  { lat: 37.785996, lng: -122.393881 },
  { lat: 37.786092, lng: -122.39383 },
  { lat: 37.785998, lng: -122.393899 },
  { lat: 37.785114, lng: -122.394365 },
  { lat: 37.785022, lng: -122.394441 },
  { lat: 37.784823, lng: -122.394635 },
  { lat: 37.784719, lng: -122.394629 },
  { lat: 37.785069, lng: -122.394176 },
  { lat: 37.7855, lng: -122.39365 },
  { lat: 37.78577, lng: -122.393291 },
  { lat: 37.785839, lng: -122.393159 },
  { lat: 37.782651, lng: -122.400628 },
  { lat: 37.782616, lng: -122.400599 },
  { lat: 37.782702, lng: -122.40047 },
  { lat: 37.782915, lng: -122.400192 },
  { lat: 37.783137, lng: -122.399887 },
  { lat: 37.783414, lng: -122.399519 },
  { lat: 37.783629, lng: -122.399237 },
  { lat: 37.783688, lng: -122.399157 },
  { lat: 37.783716, lng: -122.399106 },
  { lat: 37.783798, lng: -122.399072 },
  { lat: 37.783997, lng: -122.399186 },
  { lat: 37.784271, lng: -122.399538 },
  { lat: 37.784577, lng: -122.399948 },
  { lat: 37.784828, lng: -122.40026 },
  { lat: 37.784999, lng: -122.400477 },
  { lat: 37.785113, lng: -122.400651 },
  { lat: 37.785155, lng: -122.400703 },
  { lat: 37.785192, lng: -122.400749 },
  { lat: 37.785278, lng: -122.400839 },
  { lat: 37.785387, lng: -122.400857 },
  { lat: 37.785478, lng: -122.40089 },
  { lat: 37.785526, lng: -122.401022 },
  { lat: 37.785598, lng: -122.401148 },
  { lat: 37.785631, lng: -122.401202 },
  { lat: 37.78566, lng: -122.401267 },
  { lat: 37.803986, lng: -122.426035 },
  { lat: 37.804102, lng: -122.425089 },
  { lat: 37.804211, lng: -122.424156 },
  { lat: 37.803861, lng: -122.423385 },
  { lat: 37.803151, lng: -122.423214 },
  { lat: 37.802439, lng: -122.423077 },
  { lat: 37.80174, lng: -122.422905 },
  { lat: 37.801069, lng: -122.422785 },
  { lat: 37.800345, lng: -122.422649 },
  { lat: 37.799633, lng: -122.422603 },
  { lat: 37.79975, lng: -122.4217 },
  { lat: 37.799885, lng: -122.420854 },
  { lat: 37.799209, lng: -122.420607 },
  { lat: 37.795656, lng: -122.400395 },
  { lat: 37.795203, lng: -122.400304 },
  { lat: 37.778738, lng: -122.415584 },
  { lat: 37.778812, lng: -122.415189 },
  { lat: 37.778824, lng: -122.415092 },
  { lat: 37.778833, lng: -122.414932 },
  { lat: 37.778834, lng: -122.414898 },
  { lat: 37.77874, lng: -122.414757 },
  { lat: 37.778501, lng: -122.414433 },
  { lat: 37.778182, lng: -122.414026 },
  { lat: 37.777851, lng: -122.413623 },
  { lat: 37.777486, lng: -122.413166 },
  { lat: 37.777109, lng: -122.412674 },
  { lat: 37.776743, lng: -122.412186 },
  { lat: 37.77644, lng: -122.4118 },
  { lat: 37.776295, lng: -122.411614 },
  { lat: 37.776158, lng: -122.41144 },
  { lat: 37.775806, lng: -122.410997 },
  { lat: 37.775422, lng: -122.410484 },
  { lat: 37.775126, lng: -122.410087 },
  { lat: 37.775012, lng: -122.409854 },
  { lat: 37.775164, lng: -122.409573 },
  { lat: 37.775498, lng: -122.40918 },
  { lat: 37.775868, lng: -122.40873 },
  { lat: 37.776256, lng: -122.40824 },
  { lat: 37.776519, lng: -122.407928 },
  { lat: 37.776539, lng: -122.407904 },
  { lat: 37.776595, lng: -122.407854 },
  { lat: 37.776853, lng: -122.407547 },
  { lat: 37.777234, lng: -122.407087 },
  { lat: 37.777644, lng: -122.406558 },
  { lat: 37.778066, lng: -122.406017 },
  { lat: 37.778468, lng: -122.405499 },
  { lat: 37.778866, lng: -122.404995 },
  { lat: 37.779295, lng: -122.404455 },
  { lat: 37.779695, lng: -122.40395 },
  { lat: 37.779982, lng: -122.403584 },
  { lat: 37.780295, lng: -122.403223 },
  { lat: 37.780664, lng: -122.402766 },
  { lat: 37.781043, lng: -122.402288 },
  { lat: 37.781399, lng: -122.401823 },
  { lat: 37.781727, lng: -122.401407 },
  { lat: 37.781853, lng: -122.401247 },
  { lat: 37.781894, lng: -122.401195 },
  { lat: 37.782076, lng: -122.400977 },
  { lat: 37.782338, lng: -122.400603 },
  { lat: 37.782666, lng: -122.400133 },
  { lat: 37.783048, lng: -122.399634 },
  { lat: 37.78345, lng: -122.399198 },
  { lat: 37.783791, lng: -122.398998 },
  { lat: 37.784177, lng: -122.398959 },
  { lat: 37.784388, lng: -122.398971 },
  { lat: 37.784404, lng: -122.399128 },
  { lat: 37.784586, lng: -122.399524 },
  { lat: 37.784835, lng: -122.399927 },
  { lat: 37.785116, lng: -122.400307 },
  { lat: 37.785282, lng: -122.400539 },
  { lat: 37.785346, lng: -122.400692 },
  { lat: 37.765769, lng: -122.407201 },
  { lat: 37.76579, lng: -122.407414 },
  { lat: 37.765802, lng: -122.407755 },
  { lat: 37.765791, lng: -122.408219 },
  { lat: 37.765763, lng: -122.408759 },
  { lat: 37.765726, lng: -122.409348 },
  { lat: 37.765716, lng: -122.409882 },
  { lat: 37.765708, lng: -122.410202 },
  { lat: 37.765705, lng: -122.410253 },
  { lat: 37.765707, lng: -122.410369 },
  { lat: 37.765692, lng: -122.41072 },
  { lat: 37.765699, lng: -122.411215 },
  { lat: 37.765687, lng: -122.411789 },
  { lat: 37.765666, lng: -122.412373 },
  { lat: 37.765598, lng: -122.412883 },
  { lat: 37.765543, lng: -122.413039 },
  { lat: 37.765532, lng: -122.413125 },
  { lat: 37.7655, lng: -122.413553 },
  { lat: 37.765448, lng: -122.414053 },
  { lat: 37.765388, lng: -122.414645 },
  { lat: 37.765323, lng: -122.41525 },
  { lat: 37.765303, lng: -122.415847 },
  { lat: 37.765251, lng: -122.416439 },
  { lat: 37.765204, lng: -122.41702 },
  { lat: 37.765172, lng: -122.417556 },
  { lat: 37.765164, lng: -122.418075 },
  { lat: 37.765153, lng: -122.418618 },
  { lat: 37.765136, lng: -122.419112 },
  { lat: 37.765129, lng: -122.419378 },
  { lat: 37.765119, lng: -122.419481 },
  { lat: 37.7651, lng: -122.419852 },
  { lat: 37.765083, lng: -122.420349 },
  { lat: 37.765045, lng: -122.42093 },
  { lat: 37.764992, lng: -122.421481 },
  { lat: 37.76498, lng: -122.421695 },
  { lat: 37.764993, lng: -122.421843 },
  { lat: 37.764986, lng: -122.422255 },
  { lat: 37.764975, lng: -122.422823 },
  { lat: 37.764939, lng: -122.423411 },
  { lat: 37.764902, lng: -122.424014 },
  { lat: 37.764853, lng: -122.424576 },
  { lat: 37.764826, lng: -122.424922 },
  { lat: 37.764796, lng: -122.425375 },
  { lat: 37.764782, lng: -122.425869 },
  { lat: 37.764768, lng: -122.426089 },
  { lat: 37.764766, lng: -122.426117 },
  { lat: 37.764723, lng: -122.426276 },
  { lat: 37.764681, lng: -122.426649 },
  { lat: 37.782012, lng: -122.4042 },
  { lat: 37.781574, lng: -122.404911 },
  { lat: 37.781055, lng: -122.405597 },
  { lat: 37.780479, lng: -122.406341 },
  { lat: 37.779996, lng: -122.406939 },
  { lat: 37.779459, lng: -122.407613 },
  { lat: 37.778953, lng: -122.408228 },
  { lat: 37.778409, lng: -122.408839 },
  { lat: 37.777842, lng: -122.409501 },
  { lat: 37.777334, lng: -122.410181 },
  { lat: 37.776809, lng: -122.410836 },
  { lat: 37.77624, lng: -122.411514 },
  { lat: 37.775725, lng: -122.412145 },
  { lat: 37.77519, lng: -122.412805 },
  { lat: 37.774672, lng: -122.413464 },
  { lat: 37.774084, lng: -122.414186 },
  { lat: 37.773533, lng: -122.413636 },
  { lat: 37.773021, lng: -122.413009 },
  { lat: 37.772501, lng: -122.412371 },
  { lat: 37.771964, lng: -122.411681 },
  { lat: 37.771479, lng: -122.411078 },
  { lat: 37.770992, lng: -122.410477 },
  { lat: 37.770467, lng: -122.409801 },
  { lat: 37.77009, lng: -122.408904 },
  { lat: 37.769657, lng: -122.408103 },
  { lat: 37.769132, lng: -122.407276 },
  { lat: 37.768564, lng: -122.406469 },
  { lat: 37.76798, lng: -122.405745 },
  { lat: 37.76738, lng: -122.405299 },
  { lat: 37.766604, lng: -122.405297 },
  { lat: 37.765838, lng: -122.4052 },
  { lat: 37.765139, lng: -122.405139 },
  { lat: 37.764457, lng: -122.405094 },
  { lat: 37.763716, lng: -122.405142 },
  { lat: 37.762932, lng: -122.405398 },
  { lat: 37.762126, lng: -122.405813 },
  { lat: 37.761344, lng: -122.406215 },
  { lat: 37.760556, lng: -122.406495 },
  { lat: 37.759732, lng: -122.406484 },
  { lat: 37.75891, lng: -122.406228 },
  { lat: 37.758182, lng: -122.405695 },
  { lat: 37.757676, lng: -122.405118 },
  { lat: 37.757039, lng: -122.404346 },
  { lat: 37.756335, lng: -122.403719 },
  { lat: 37.755503, lng: -122.403406 },
  { lat: 37.754665, lng: -122.403242 },
  { lat: 37.753837, lng: -122.403172 },
  { lat: 37.752986, lng: -122.403112 },
  { lat: 37.751266, lng: -122.403355 },
];
