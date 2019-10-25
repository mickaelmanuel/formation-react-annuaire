import { ADD_NEWSLETTER, UPDATE_NEWSLETTER, DELETE_NEWSLETTER } from "../../action";
import { uniqueId } from "../../utils";
import produce from "immer";

export const initialState = [
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 1",
    content:
      "Et prima post Osdroenam quam, ut dictum est, ab hac descriptione discrevimus, Commagena, nunc Euphratensis, clementer adsurgit, Hierapoli, vetere Nino et Samosata civitatibus amplis inlustris."
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 2",
    content:
      "Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus, sed splendore liberalium doctrinarum minus quam nobilem decuerat institutus, quo administrante seditiones sunt concitatae graves ob inopiam vini: huius avidis usibus vulgus intentum ad motus asperos excitatur et crebros."
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 3",
    content:
      "Haec et huius modi quaedam innumerabilia ultrix facinorum impiorum bonorumque praemiatrix aliquotiens operatur Adrastia atque utinam semper quam vocabulo duplici etiam Nemesim appellamus: ius quoddam sublime numinis efficacis, humanarum mentium opinione lunari circulo superpositum, vel ut definiunt alii, substantialis tutela generali potentia partilibus praesidens fatis, quam theologi veteres fingentes Iustitiae filiam ex abdita quadam aeternitate tradunt omnia despectare terrena."
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 4",
    content:
      "Ardeo, mihi credite, Patres conscripti (id quod vosmet de me existimatis et facitis ipsi) incredibili quodam amore patriae, qui me amor et subvenire olim impendentibus periculis maximis cum dimicatione capitis, et rursum, cum omnia tela undique esse intenta in patriam viderem, subire coegit atque excipere unum pro universis. Hic me meus in rem publicam animus pristinus ac perennis cum C. Caesare reducit, reconciliat, restituit in gratiam."
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 5",
    content:
      "Iam in altera philosophiae parte. quae est quaerendi ac disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem videtur, inermis ac nudus est. tollit definitiones, nihil de dividendo ac partiendo docet, non quo modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ambigua distinguantur ostendit; iudicia rerum in sensibus ponit, quibus si semel aliquid falsi pro vero probatum sit, sublatum esse omne iudicium veri et falsi putat."
  },
  {
    id: uniqueId("newsletter"),
    title: "Newsletter 6",
    content:
      "Nihil est enim virtute amabilius, nihil quod magis adliciat ad diligendum, quippe cum propter virtutem et probitatem etiam eos, quos numquam vidimus, quodam modo diligamus. Quis est qui C. Fabrici, M'. Curi non cum caritate aliqua benevola memoriam usurpet, quos numquam viderit? quis autem est, qui Tarquinium Superbum, qui Sp. Cassium, Sp. Maelium non oderit? Cum duobus ducibus de imperio in Italia est decertatum, Pyrrho et Hannibale; ab altero propter probitatem eius non nimis alienos animos habemus, alterum propter crudelitatem semper haec civitas oderit."
  }
];

const initialNewsletter = { id: "", title: "", content: "" };

export const newslettersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWSLETTER:
      return produce(state, draftState => {
        draftState.push({ ...initialNewsletter, ...action.payload.newsletter });
      });

    case UPDATE_NEWSLETTER:
      var index = state.findIndex(x => x.id === action.payload.newsletter.id);
      return produce(state, draftState => {
        draftState[index] = { ...draftState[index], ...action.payload.newsletter };
      });

    case DELETE_NEWSLETTER:
      var indexToDelete = state.findIndex(x => x.id === action.payload);
      return produce(state, draftState => {
        draftState.splice(indexToDelete, 1);
      });

    default:
      return state;
  }
};
