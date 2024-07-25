interface CitationStat {
  statName: string;
  total: number;
}

interface Citations {
  all: number;
  since_2019: number;
}

interface HIndex {
  all: number;
  since_2019: number;
}

interface I10Index {
  all: number;
  since_2019: number;
}

type CitedByItem = Citations | HIndex | I10Index;

interface Publication {
  title: string;
  link: string;
  authors: string;
  publicationSource: string;
  numberOfCitations: number;
  year: string;
}

interface ArticleItem {
  title: string;
  link: string;
  citation_id: string;
  authors: string;
  publication: string;
  cited_by: CitedBy;
  year: string;
}

interface CitedBy {
  value: number;
  link: string;
  serpapiLink: string;
  citesId: string;
}

type FirebaseAuthErrorCode =
  | "auth/email-already-in-use"
  | "auth/invalid-email"
  | "auth/operation-not-allowed"
  | "auth/weak-password"
  | "auth/user-disabled"
  | "auth/user-not-found"
  | "auth/wrong-password"
  | "auth/invalid-credential";

interface EmailAccProps {
  user: User;
}

interface GoogleAccProps {
  user: User;
}
