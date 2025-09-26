"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelApplicationReplicaNew = void 0;
var exceljs_1 = require("exceljs");
/**
 * 🎯 GÉNÉRATEUR EXCEL CONFORME À L'APPLICATION
 * Structure EXACTE avec onglets intégrés dans UNE SEULE feuille pour la section 8
 */
var ExcelApplicationReplicaNew = /** @class */ (function () {
    function ExcelApplicationReplicaNew() {
        // Couleurs conformes à l'application
        this.colors = {
            primary: 'FFC000',
            white: 'FFFFFF',
            success: '70AD47',
            danger: 'DC3545',
            warning: 'FFC107',
            info: '17A2B8',
            light: 'F8F9FA',
            dark: '343A40',
            gray: 'F5F5F5'
        };
        // Styles réutilisables
        this.styles = {
            titleCell: {
                font: { name: 'Calibri', size: 20, bold: true, color: { argb: this.colors.white } },
                fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.primary } },
                alignment: { horizontal: 'center', vertical: 'middle' },
                border: this.getBorder('medium')
            },
            subSectionTitle: {
                font: { name: 'Calibri', size: 14, bold: true, color: { argb: '333333' } },
                fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.gray } },
                alignment: { horizontal: 'center', vertical: 'middle' },
                border: this.getBorder('thin')
            },
            tableHeader: {
                font: { name: 'Calibri', size: 12, bold: true, color: { argb: this.colors.white } },
                fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.primary } },
                alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
                border: this.getBorder('thin')
            },
            dataCell: {
                font: { name: 'Calibri', size: 11, color: { argb: '333333' } },
                alignment: { horizontal: 'left', vertical: 'middle', wrapText: true, indent: 1 },
                border: this.getBorder('thin')
            }
        };
        this.workbook = new exceljs_1.default.Workbook();
        this.workbook.creator = 'Application Audit ANCS';
        this.workbook.created = new Date();
    }
    /**
     * 🎯 GÉNÉRATION COMPLÈTE DE L'APPLICATION CONFORME
     */
    ExcelApplicationReplicaNew.prototype.generateCompleteApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('🎯 DÉBUT - Génération application Excel CONFORME à l\'application web');
                        // Créer toutes les sections dans l'ordre exact de l'application
                        return [4 /*yield*/, this.createSection0_CoverPage()];
                    case 1:
                        // Créer toutes les sections dans l'ordre exact de l'application
                        _a.sent();
                        return [4 /*yield*/, this.createSection1_AvantPropos()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.createSection2_MissionFramework()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.createSection3_TermsDefinitions()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.createSection4_References()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.createSection5_OrganizationPresentation()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.createSection6_AuditScope()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.createSection7_AuditMethodology()];
                    case 8:
                        _a.sent();
                        // ⭐ SECTION 8: UNE SEULE FEUILLE AVEC ONGLETS INTÉGRÉS
                        return [4 /*yield*/, this.createSection8_SyntheseResults()];
                    case 9:
                        // ⭐ SECTION 8: UNE SEULE FEUILLE AVEC ONGLETS INTÉGRÉS
                        _a.sent();
                        return [4 /*yield*/, this.createSection9_RiskAssessment()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.createSection10_ActionPlan()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.createSection11_Dashboard()];
                    case 12:
                        _a.sent();
                        console.log('✅ Application Excel COMPLÈTE ET CONFORME générée');
                        return [2 /*return*/, this.workbook];
                }
            });
        });
    };
    /**
     * 📊 SECTION 8: SYNTHÈSE DES RÉSULTATS - UNE FEUILLE AVEC ONGLETS INTÉGRÉS
     * Structure EXACTE de l'application avec 8 onglets dans une seule feuille
     */
    ExcelApplicationReplicaNew.prototype.createSection8_SyntheseResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet, titleCell, currentRow, instructionCell, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('📊 Création Section 8: Synthèse des résultats - STRUCTURE CONFORME');
                        sheet = this.workbook.addWorksheet('8. Synthèse des résultats');
                        // === TITRE PRINCIPAL ===
                        sheet.mergeCells('A1:P1');
                        titleCell = sheet.getCell('A1');
                        titleCell.value = "SYNTHÈSE DES RÉSULTATS DE L'AUDIT";
                        titleCell.style = this.styles.titleCell;
                        sheet.getRow(1).height = 40;
                        currentRow = 3;
                        // === NAVIGATION PAR ONGLETS INTÉGRÉS ===
                        return [4 /*yield*/, this.createTabNavigation(sheet, currentRow)];
                    case 1:
                        // === NAVIGATION PAR ONGLETS INTÉGRÉS ===
                        _a.sent();
                        currentRow += 2;
                        // === ZONE DE CONTENU DYNAMIQUE ===
                        // Afficher le contenu de l'onglet par défaut (Référentiels)
                        return [4 /*yield*/, this.showStandardsContent(sheet, currentRow)];
                    case 2:
                        // === ZONE DE CONTENU DYNAMIQUE ===
                        // Afficher le contenu de l'onglet par défaut (Référentiels)
                        _a.sent();
                        // === INSTRUCTIONS POUR L'UTILISATEUR ===
                        currentRow += 15; // Espace après le contenu
                        sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                        instructionCell = sheet.getCell("A".concat(currentRow));
                        instructionCell.value = "💡 INSTRUCTIONS: Cliquez sur les onglets ci-dessus pour naviguer entre les différentes sections. Le contenu s'affichera dans cette zone.";
                        instructionCell.style = {
                            font: { name: 'Calibri', size: 11, italic: true, color: { argb: '666666' } },
                            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F0F8FF' } },
                            alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
                            border: this.getBorder('thin')
                        };
                        sheet.getRow(currentRow).height = 30;
                        // Ajuster les largeurs de colonnes
                        for (i = 1; i <= 16; i++) {
                            sheet.getColumn(i).width = 12;
                        }
                        console.log('✅ Section 8 Synthèse avec onglets intégrés terminée');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 🎯 NAVIGATION PAR ONGLETS INTÉGRÉS - EXACTEMENT COMME L'APPLICATION
     */
    ExcelApplicationReplicaNew.prototype.createTabNavigation = function (sheet, startRow) {
        return __awaiter(this, void 0, void 0, function () {
            var tabs;
            var _this = this;
            return __generator(this, function (_a) {
                tabs = [
                    { name: 'Référentiels', id: 'standards', col: 'A', active: true },
                    { name: 'Responsabilités', id: 'responsibility', col: 'B', active: false },
                    { name: 'Tests', id: 'tests', col: 'C', active: false },
                    { name: 'Plan d\'action', id: 'action-plan', col: 'D', active: false },
                    { name: 'Évolution', id: 'indicators', col: 'E', active: false },
                    { name: 'Constats', id: 'findings', col: 'F', active: false },
                    { name: 'Maturité SI', id: 'maturity', col: 'G', active: false },
                    { name: 'Indicateurs', id: 'security-indicators', col: 'H', active: false },
                    { name: 'Tableau de bord', id: 'dashboard', col: 'I', active: false }
                ];
                // Créer les boutons d'onglets
                tabs.forEach(function (tab) {
                    var startCol = tab.col;
                    var endCol = String.fromCharCode(startCol.charCodeAt(0) + 1);
                    sheet.mergeCells("".concat(startCol).concat(startRow, ":").concat(endCol).concat(startRow));
                    var tabCell = sheet.getCell("".concat(startCol).concat(startRow));
                    tabCell.value = tab.name;
                    // Style selon l'état (actif/inactif)
                    if (tab.active) {
                        tabCell.style = {
                            font: { name: 'Calibri', size: 11, bold: true, color: { argb: _this.colors.white } },
                            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: _this.colors.primary } },
                            alignment: { horizontal: 'center', vertical: 'middle' },
                            border: _this.getBorder('thin')
                        };
                    }
                    else {
                        tabCell.style = {
                            font: { name: 'Calibri', size: 11, bold: true, color: { argb: '333333' } },
                            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: _this.colors.gray } },
                            alignment: { horizontal: 'center', vertical: 'middle' },
                            border: _this.getBorder('thin')
                        };
                    }
                });
                sheet.getRow(startRow).height = 30;
                return [2 /*return*/];
            });
        });
    };
    /**
     * 📄 CONTENU ONGLET RÉFÉRENTIELS - EXACTEMENT COMME L'APPLICATION
     */
    ExcelApplicationReplicaNew.prototype.showStandardsContent = function (sheet, startRow) {
        return __awaiter(this, void 0, void 0, function () {
            var currentRow, tabTitle, description, headers, referentiels, columnWidths;
            var _this = this;
            return __generator(this, function (_a) {
                currentRow = startRow;
                // === TITRE DE L'ONGLET ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                tabTitle = sheet.getCell("A".concat(currentRow));
                tabTitle.value = "📄 RÉFÉRENTIELS ET STANDARDS D'AUDIT";
                tabTitle.style = {
                    font: { name: 'Calibri', size: 16, bold: true, color: { argb: this.colors.white } },
                    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.primary } },
                    alignment: { horizontal: 'center', vertical: 'middle' },
                    border: this.getBorder('medium')
                };
                sheet.getRow(currentRow).height = 35;
                currentRow += 2;
                // === DESCRIPTION ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                description = sheet.getCell("A".concat(currentRow));
                description.value = "Standards et référentiels utilisés pour l'évaluation de la sécurité du système d'information";
                description.style = {
                    font: { name: 'Calibri', size: 11, italic: true, color: { argb: '666666' } },
                    alignment: { horizontal: 'center', vertical: 'middle' }
                };
                currentRow += 2;
                headers = ['Référentiel', 'Version', 'Domaine d\'application', 'Utilisation dans l\'audit'];
                headers.forEach(function (header, index) {
                    var colLetter = String.fromCharCode(65 + index);
                    var cell = sheet.getCell("".concat(colLetter).concat(currentRow));
                    cell.value = header;
                    cell.style = _this.styles.tableHeader;
                });
                currentRow++;
                referentiels = [
                    ['ANCS:2022', '2022', 'Sécurité des systèmes d\'information', 'Référentiel principal pour l\'évaluation'],
                    ['ISO 27001', '2022', 'Management de la sécurité de l\'information', 'Référentiel complémentaire pour les processus'],
                    ['NIST Framework', '1.1', 'Cybersécurité', 'Guide pour l\'identification des risques'],
                    ['ANSSI', 'Guides', 'Sécurité numérique', 'Bonnes pratiques sectorielles']
                ];
                referentiels.forEach(function (_a) {
                    var ref = _a[0], version = _a[1], domaine = _a[2], utilisation = _a[3];
                    var refCell = sheet.getCell("A".concat(currentRow));
                    var versionCell = sheet.getCell("B".concat(currentRow));
                    var domaineCell = sheet.getCell("C".concat(currentRow));
                    var utilisationCell = sheet.getCell("D".concat(currentRow));
                    refCell.value = ref;
                    versionCell.value = version;
                    domaineCell.value = domaine;
                    utilisationCell.value = utilisation;
                    [refCell, versionCell, domaineCell, utilisationCell].forEach(function (cell) {
                        cell.style = _this.styles.dataCell;
                    });
                    currentRow++;
                });
                columnWidths = [25, 15, 35, 40];
                columnWidths.forEach(function (width, index) {
                    sheet.getColumn(index + 1).width = width;
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * ⚖️ CONTENU ONGLET RESPONSABILITÉS - EXACTEMENT COMME L'APPLICATION
     */
    ExcelApplicationReplicaNew.prototype.showResponsibilityContent = function (sheet, startRow) {
        return __awaiter(this, void 0, void 0, function () {
            var currentRow, tabTitle, description, headers, responsibilityData;
            var _this = this;
            return __generator(this, function (_a) {
                currentRow = startRow;
                // === TITRE DE L'ONGLET ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                tabTitle = sheet.getCell("A".concat(currentRow));
                tabTitle.value = "⚖️ RESPONSABILITÉS DE L'AUDITEUR ET LIMITES DE L'AUDIT";
                tabTitle.style = {
                    font: { name: 'Calibri', size: 16, bold: true, color: { argb: this.colors.white } },
                    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.primary } },
                    alignment: { horizontal: 'center', vertical: 'middle' },
                    border: this.getBorder('medium')
                };
                sheet.getRow(currentRow).height = 35;
                currentRow += 2;
                // === DESCRIPTION ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                description = sheet.getCell("A".concat(currentRow));
                description.value = "Définition claire des responsabilités de l'auditeur et des limites du périmètre d'audit";
                description.style = {
                    font: { name: 'Calibri', size: 11, italic: true, color: { argb: '666666' } },
                    alignment: { horizontal: 'center', vertical: 'middle' }
                };
                currentRow += 2;
                headers = ['Responsabilités de l\'Auditeur', 'Limites de l\'Audit'];
                headers.forEach(function (header, index) {
                    var startCol = index === 0 ? 'A' : 'I';
                    var endCol = index === 0 ? 'H' : 'P';
                    sheet.mergeCells("".concat(startCol).concat(currentRow, ":").concat(endCol).concat(currentRow));
                    var cell = sheet.getCell("".concat(startCol).concat(currentRow));
                    cell.value = header;
                    cell.style = _this.styles.tableHeader;
                });
                currentRow++;
                responsibilityData = [
                    [
                        'Évaluer la conformité aux référentiels ANCS:2022',
                        'L\'audit se limite aux systèmes identifiés dans le périmètre'
                    ],
                    [
                        'Identifier les vulnérabilités et les risques de sécurité',
                        'Les tests sont non-intrusifs et n\'affectent pas la production'
                    ],
                    [
                        'Formuler des recommandations d\'amélioration',
                        'L\'audit ne couvre pas les aspects de continuité détaillés'
                    ],
                    [
                        'Documenter les constats et preuves d\'audit',
                        'Les recommandations sont basées sur l\'état observé'
                    ]
                ];
                responsibilityData.forEach(function (_a) {
                    var responsibility = _a[0], limitation = _a[1];
                    // Responsabilité
                    sheet.mergeCells("A".concat(currentRow, ":H").concat(currentRow));
                    var respCell = sheet.getCell("A".concat(currentRow));
                    respCell.value = responsibility;
                    respCell.style = _this.styles.dataCell;
                    // Limitation
                    sheet.mergeCells("I".concat(currentRow, ":P").concat(currentRow));
                    var limitCell = sheet.getCell("I".concat(currentRow));
                    limitCell.value = limitation;
                    limitCell.style = _this.styles.dataCell;
                    sheet.getRow(currentRow).height = 25;
                    currentRow++;
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 📋 CONTENU ONGLET TESTS - EXACTEMENT COMME L'APPLICATION
     */
    ExcelApplicationReplicaNew.prototype.showTestsContent = function (sheet, startRow) {
        return __awaiter(this, void 0, void 0, function () {
            var currentRow, tabTitle, description, headers, testData, columnWidths;
            var _this = this;
            return __generator(this, function (_a) {
                currentRow = startRow;
                // === TITRE DE L'ONGLET ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                tabTitle = sheet.getCell("A".concat(currentRow));
                tabTitle.value = "📋 TYPES ET NATURE DES TESTS RÉALISÉS";
                tabTitle.style = {
                    font: { name: 'Calibri', size: 16, bold: true, color: { argb: this.colors.white } },
                    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: this.colors.primary } },
                    alignment: { horizontal: 'center', vertical: 'middle' },
                    border: this.getBorder('medium')
                };
                sheet.getRow(currentRow).height = 35;
                currentRow += 2;
                // === DESCRIPTION ===
                sheet.mergeCells("A".concat(currentRow, ":P").concat(currentRow));
                description = sheet.getCell("A".concat(currentRow));
                description.value = "Méthodologie détaillée et types de tests appliqués lors de l'audit de sécurité";
                description.style = {
                    font: { name: 'Calibri', size: 11, italic: true, color: { argb: '666666' } },
                    alignment: { horizontal: 'center', vertical: 'middle' }
                };
                currentRow += 2;
                headers = ['Type de Test', 'Nature du Test', 'Objectif', 'Justification', 'Résultat'];
                headers.forEach(function (header, index) {
                    var colLetter = String.fromCharCode(65 + index);
                    var cell = sheet.getCell("".concat(colLetter).concat(currentRow));
                    cell.value = header;
                    cell.style = _this.styles.tableHeader;
                });
                currentRow++;
                testData = [
                    [
                        'Test Technique',
                        'Analyse de vulnérabilités réseau',
                        'Identifier les failles de sécurité réseau',
                        'Évaluation de la surface d\'attaque externe',
                        'Conforme'
                    ],
                    [
                        'Test Organisationnel',
                        'Revue des politiques de sécurité',
                        'Vérifier l\'existence et la complétude des politiques',
                        'Conformité aux exigences ANCS',
                        'Partiellement conforme'
                    ],
                    [
                        'Test Technique',
                        'Audit des contrôles d\'accès',
                        'Vérifier la gestion des droits utilisateurs',
                        'Principe du moindre privilège',
                        'Non conforme'
                    ],
                    [
                        'Test Documentaire',
                        'Analyse des procédures de sauvegarde',
                        'Évaluer la robustesse du plan de sauvegarde',
                        'Continuité d\'activité',
                        'Conforme'
                    ]
                ];
                testData.forEach(function (testRow) {
                    testRow.forEach(function (value, index) {
                        var colLetter = String.fromCharCode(65 + index);
                        var cell = sheet.getCell("".concat(colLetter).concat(currentRow));
                        cell.value = value;
                        cell.style = _this.styles.dataCell;
                        // Colorer selon le résultat
                        if (index === 4) { // Colonne Résultat
                            if (value === 'Conforme') {
                                cell.style.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E8F5E8' } };
                                cell.style.font = __assign(__assign({}, cell.style.font), { color: { argb: '2D5A2D' }, bold: true });
                            }
                            else if (value === 'Partiellement conforme') {
                                cell.style.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEB9C' } };
                                cell.style.font = __assign(__assign({}, cell.style.font), { color: { argb: '8B4513' }, bold: true });
                            }
                            else if (value === 'Non conforme') {
                                cell.style.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE8E8' } };
                                cell.style.font = __assign(__assign({}, cell.style.font), { color: { argb: 'CC0000' }, bold: true });
                            }
                        }
                    });
                    sheet.getRow(currentRow).height = 25;
                    currentRow++;
                });
                columnWidths = [20, 30, 25, 30, 20];
                columnWidths.forEach(function (width, index) {
                    sheet.getColumn(index + 1).width = width;
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 🛠️ MÉTHODES UTILITAIRES
     */
    ExcelApplicationReplicaNew.prototype.getBorder = function (weight) {
        if (weight === void 0) { weight = 'thin'; }
        var borderStyle = {
            style: weight,
            color: { argb: '000000' }
        };
        return {
            top: borderStyle,
            left: borderStyle,
            bottom: borderStyle,
            right: borderStyle
        };
    };
    // Méthodes pour les autres sections (simplifiées pour l'instant)
    ExcelApplicationReplicaNew.prototype.createSection0_CoverPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('0. Page de couverture');
                sheet.getCell('A1').value = "PAGE DE COUVERTURE";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection1_AvantPropos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('1. Avant propos');
                sheet.getCell('A1').value = "AVANT PROPOS";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection2_MissionFramework = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('2. Cadre de la mission');
                sheet.getCell('A1').value = "CADRE DE LA MISSION";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection3_TermsDefinitions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('3. Termes et définitions');
                sheet.getCell('A1').value = "TERMES ET DÉFINITIONS";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection4_References = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('4. Références');
                sheet.getCell('A1').value = "RÉFÉRENCES";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection5_OrganizationPresentation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('5. Présentation organisation');
                sheet.getCell('A1').value = "PRÉSENTATION DE L'ORGANISATION";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection6_AuditScope = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('6. Champ d\'audit');
                sheet.getCell('A1').value = "CHAMP D'AUDIT";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection7_AuditMethodology = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('7. Méthodologie d\'audit');
                sheet.getCell('A1').value = "MÉTHODOLOGIE D'AUDIT";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection9_RiskAssessment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('9. Appréciation des risques');
                sheet.getCell('A1').value = "APPRÉCIATION DES RISQUES";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection10_ActionPlan = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('10. Plan d\'action');
                sheet.getCell('A1').value = "PLAN D'ACTION";
                return [2 /*return*/];
            });
        });
    };
    ExcelApplicationReplicaNew.prototype.createSection11_Dashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sheet;
            return __generator(this, function (_a) {
                sheet = this.workbook.addWorksheet('11. Dashboard');
                sheet.getCell('A1').value = "DASHBOARD";
                return [2 /*return*/];
            });
        });
    };
    return ExcelApplicationReplicaNew;
}());
exports.ExcelApplicationReplicaNew = ExcelApplicationReplicaNew;
