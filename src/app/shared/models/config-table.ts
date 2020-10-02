export class ConfigTable{
// tạo title lang dạng: TABLE.nameTable.en
// Mảng object config các thuộc tính
  properties: Property[];
// Dùng khi hiển thị detail Object
  nameObjectDetail: string;
// Tên bảng config trong i18n/dynamic-table
  nameTable: string;
  numericalOrder?: boolean; // <= số thứ tự
// Thuộc tính ID để xác định object đc chọn
  checkMark?: string;
// Mảng object config thuộc tính modal detail
  propertiesDetail?: Property[];
  isBorder?: boolean;
// Cuộn bảng '201px'
  isScroll?: string;
}

export class Property {
// Tên thuộc tính hiện trên bảng
  name: LangProperty;
// Tên các thuộc tính nếu cần ghép chung một cột
  extends?: LangProperty[];
// ẩn column when responsive in mobile screen
  hiddenOnMobile?: boolean;
// xác định vị trí cột hiển thị amount, hiển thị giá trị nếu amount = true
  tail?: LangProperty;
// Độ rộng cột %
  colWidth?: string;
}


export class LangProperty {
// Thuộc tính tiếng anh
  en: any;
// thuộc tính tiếng việt nếu có
  vn?: any;
}
